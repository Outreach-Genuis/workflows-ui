// src/make_call.ts
var node = { "name": "Make Call", "id": "make_call", "descripition": "Places an outbound phone call to the specified number with customizable script and voice options", "inputSchema": {
  phone: {
    name: "Phone Number",
    description: "The phone number to call in E.164 format (e.g., +15551234567)",
    validationSchema: /^\+[1-9]\d{1,14}$/,
    errorMessage: "Please enter a valid phone number in E.164 format (e.g., +15551234567)",
    required: true,
    input: {
      type: "text",
      placeholder: "+15551234567"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  agentId: {
    name: "Agent",
    description: "The agent who will handle the call",
    validationSchema: /.*/,
    errorMessage: "Agent ID must be 3-30 alphanumeric characters, underscores, or hyphens",
    required: true,
    input: {
      type: "custom",
      tag: "agent-selector",
      options: {
        allowCreate: true
      }
    },
    parse: function(value) {
      return value.trim();
    }
  },
  phoneNumberSource: {
    name: "Phone Number Source",
    description: "The source of the phone number to use for the outbound call",
    validationSchema: /^(og-pool|bought-random|bought-specific)$/,
    errorMessage: "Phone number source must be one of: og-pool, bought-random, bought-specific",
    required: false,
    input: {
      type: "select",
      options: [
        { label: "Pool of Outreachgenius Numbers", value: "og-pool" },
        { label: "Bought Random", value: "bought-random" },
        { label: "Bought Specific", value: "bought-specific" }
      ]
    },
    parse: function(value) {
      return value;
    }
  },
  specificBoughtNumberId: {
    name: "Specific Bought Number ID",
    description: "The ID of the specific bought number to use if 'Bought Specific' is selected as the source",
    validationSchema: /.*/,
    errorMessage: "Specific Bought Number ID must be 3-30 alphanumeric characters, underscores, or hyphens",
    required: false,
    input: {
      type: "custom",
      tag: "phone-id-selector"
    },
    parse: function(value) {
      return value.trim();
    },
    getVisible: (inputs) => {
      return inputs.phoneNumberSource === "bought-specific";
    }
  },
  extraInstructions: {
    name: "Extra Instructions",
    description: "Additional instructions for the agent",
    validationSchema: /.*/,
    errorMessage: "Extra instructions must be less than 500 characters if provided",
    required: false,
    input: {
      type: "textarea",
      placeholder: "Please be polite and professional.",
      minLength: 0,
      maxLength: 1e3
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {
  transcription: {
    name: "Call Transcription",
    description: "The transcribed content of the call",
    example: "Hello, this is John speaking. I'm calling about...",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  callResult: {
    name: "Call Result",
    description: "The status or outcome of the call attempt",
    example: "answered",
    validator: function(value) {
      return ["answered", "no_answer", "busy", "failed"].includes(value);
    }
  },
  recordingUrl: {
    name: "Recording URL",
    description: "URL to access the call recording",
    example: "https://example.com/recordings/call12345.mp3",
    validator: function(value) {
      return typeof value === "string" && value.startsWith("http");
    }
  }
}, "groups": ["Communication", "Phone"], "branches": { "answered": { "id": "answered", "name": "Answered", "description": "Call was answered by the recipient" }, "no_answer": { "id": "no_answer", "name": "No Answer", "description": "Call was not answered after ringing" }, "busy": { "id": "busy", "name": "Busy", "description": "Recipient's line was busy" }, "failed": { "id": "failed", "name": "Failed", "description": "Call failed to connect due to technical issues" } }, "isTriggerNode": false, "cost": 0 };

// src/waittime.ts
var node2 = { "name": "Wait Time", "id": "waittime", "descripition": "Pauses the workflow execution for a specified duration before proceeding to the next step", "inputSchema": {
  waitType: {
    name: "Wait Type",
    description: "Choose how to specify the wait time",
    validationSchema: /^(duration|datetime|specificHour)$/,
    errorMessage: "Invalid wait type",
    required: true,
    input: {
      type: "select",
      options: [
        { label: "Duration", value: "duration" },
        { label: "Until Datetime", value: "datetime" },
        { label: "Specific Hour", value: "specificHour" }
      ]
    },
    parse: function(value) {
      return ["duration", "datetime", "specificHour"].includes(value) ? value : "duration";
    }
  },
  duration: {
    name: "Duration",
    description: "Amount of time to wait (used when Wait Type is Duration)",
    validationSchema: /^\d+$/,
    getVisible: (inputValues) => {
      return inputValues.waitType === "duration";
    },
    errorMessage: "Duration must be a positive number",
    required: false,
    input: {
      type: "number",
      min: 1,
      max: 1e3
      // Reasonable max value that works with different units
    },
    parse: function(value) {
      const parsed = Number(value);
      if (isNaN(parsed) || parsed < 0) {
        throw new Error("Duration must be a positive number");
      }
      return parsed;
    }
  },
  unit: {
    name: "Time Unit",
    getVisible: (inputValues) => {
      return inputValues.waitType === "duration";
    },
    description: "Unit of time for the duration (used when Wait Type is Duration)",
    validationSchema: /^(minutes|hours|days)$/,
    errorMessage: "Invalid time unit",
    required: false,
    input: {
      type: "select",
      options: [
        { label: "Minutes", value: "minutes" },
        { label: "Hours", value: "hours" },
        { label: "Days", value: "days" }
      ]
    },
    parse: function(value) {
      return value;
    }
  },
  targetDatetime: {
    name: "Target Datetime",
    getVisible: (inputValues) => {
      return inputValues.waitType === "datetime";
    },
    description: "The specific date and time to wait until (ISO format, used when Wait Type is Until Datetime)",
    validationSchema: /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})?$/,
    errorMessage: "Invalid datetime format. Please use ISO format (YYYY-MM-DDThh:mm:ss.sssZ)",
    required: false,
    input: {
      type: "datetime"
    },
    parse: function(value) {
      const date = new Date(value);
      if (isNaN(date.getTime())) {
        throw new Error("Invalid date format");
      }
      return value;
    }
  },
  daysFromNow: {
    name: "Days From Now",
    getVisible: (inputValues) => {
      return inputValues.waitType === "specificHour";
    },
    description: "Number of days from now (used when Wait Type is Specific Hour)",
    validationSchema: /^\d+$/,
    errorMessage: "Days must be a non-negative number",
    required: false,
    input: {
      type: "number",
      min: 0,
      max: 365
      // Reasonable max value for days
    },
    parse: function(value) {
      const parsed = Number(value);
      if (isNaN(parsed) || parsed < 0) {
        throw new Error("Days must be a non-negative number");
      }
      return parsed;
    }
  },
  hourOfDay: {
    name: "Hour of Day",
    getVisible: (inputValues) => {
      return inputValues.waitType === "specificHour";
    },
    description: "Hour of the day (0-23) (used when Wait Type is Specific Hour)",
    validationSchema: /^([0-9]|1[0-9]|2[0-3])$/,
    errorMessage: "Hour must be between 0 and 23",
    required: false,
    input: {
      type: "number",
      min: 0,
      max: 23
    },
    parse: function(value) {
      const parsed = Number(value);
      if (isNaN(parsed) || parsed < 0 || parsed > 23) {
        throw new Error("Hour must be between 0 and 23");
      }
      return parsed;
    }
  },
  timezone: {
    name: "Timezone",
    getVisible: (inputValues) => {
      return inputValues.waitType === "specificHour";
    },
    description: "Timezone for the specific hour wait (used when Wait Type is Specific Hour)",
    // This regex is a basic validation for common timezone formats (e.g., "America/New_York", "UTC").
    // It's not exhaustive for all possible IANA timezones, but covers common cases.
    validationSchema: /^[A-Za-z_]+\/[A-Za-z_]+$|^UTC$/,
    errorMessage: "Invalid timezone format (e.g., 'America/New_York' or 'UTC')",
    required: false,
    input: {
      type: "select",
      options: [
        { label: "Africa/Abidjan", value: "Africa/Abidjan" },
        { label: "Africa/Accra", value: "Africa/Accra" },
        { label: "Africa/Addis_Ababa", value: "Africa/Addis_Ababa" },
        { label: "Africa/Algiers", value: "Africa/Algiers" },
        { label: "Africa/Asmara", value: "Africa/Asmara" },
        { label: "Africa/Asmera", value: "Africa/Asmera" },
        { label: "Africa/Bamako", value: "Africa/Bamako" },
        { label: "Africa/Bangui", value: "Africa/Bangui" },
        { label: "Africa/Banjul", value: "Africa/Banjul" },
        { label: "Africa/Bissau", value: "Africa/Bissau" },
        { label: "Africa/Blantyre", value: "Africa/Blantyre" },
        { label: "Africa/Brazzaville", value: "Africa/Brazzaville" },
        { label: "Africa/Bujumbura", value: "Africa/Bujumbura" },
        { label: "Africa/Cairo", value: "Africa/Cairo" },
        { label: "Africa/Casablanca", value: "Africa/Casablanca" },
        { label: "Africa/Ceuta", value: "Africa/Ceuta" },
        { label: "Africa/Conakry", value: "Africa/Conakry" },
        { label: "Africa/Dakar", value: "Africa/Dakar" },
        { label: "Africa/Dar_es_Salaam", value: "Africa/Dar_es_Salaam" },
        { label: "Africa/Djibouti", value: "Africa/Djibouti" },
        { label: "Africa/Douala", value: "Africa/Douala" },
        { label: "Africa/El_Aaiun", value: "Africa/El_Aaiun" },
        { label: "Africa/Freetown", value: "Africa/Freetown" },
        { label: "Africa/Gaborone", value: "Africa/Gaborone" },
        { label: "Africa/Harare", value: "Africa/Harare" },
        { label: "Africa/Johannesburg", value: "Africa/Johannesburg" },
        { label: "Africa/Juba", value: "Africa/Juba" },
        { label: "Africa/Kampala", value: "Africa/Kampala" },
        { label: "Africa/Khartoum", value: "Africa/Khartoum" },
        { label: "Africa/Kigali", value: "Africa/Kigali" },
        { label: "Africa/Kinshasa", value: "Africa/Kinshasa" },
        { label: "Africa/Lagos", value: "Africa/Lagos" },
        { label: "Africa/Libreville", value: "Africa/Libreville" },
        { label: "Africa/Lome", value: "Africa/Lome" },
        { label: "Africa/Luanda", value: "Africa/Luanda" },
        { label: "Africa/Lubumbashi", value: "Africa/Lubumbashi" },
        { label: "Africa/Lusaka", value: "Africa/Lusaka" },
        { label: "Africa/Malabo", value: "Africa/Malabo" },
        { label: "Africa/Maputo", value: "Africa/Maputo" },
        { label: "Africa/Maseru", value: "Africa/Maseru" },
        { label: "Africa/Mbabane", value: "Africa/Mbabane" },
        { label: "Africa/Mogadishu", value: "Africa/Mogadishu" },
        { label: "Africa/Monrovia", value: "Africa/Monrovia" },
        { label: "Africa/Nairobi", value: "Africa/Nairobi" },
        { label: "Africa/Ndjamena", value: "Africa/Ndjamena" },
        { label: "Africa/Niamey", value: "Africa/Niamey" },
        { label: "Africa/Nouakchott", value: "Africa/Nouakchott" },
        { label: "Africa/Ouagadougou", value: "Africa/Ouagadougou" },
        { label: "Africa/Porto-Novo", value: "Africa/Porto-Novo" },
        { label: "Africa/Sao_Tome", value: "Africa/Sao_Tome" },
        { label: "Africa/Timbuktu", value: "Africa/Timbuktu" },
        { label: "Africa/Tripoli", value: "Africa/Tripoli" },
        { label: "Africa/Tunis", value: "Africa/Tunis" },
        { label: "Africa/Windhoek", value: "Africa/Windhoek" },
        { label: "America/Adak", value: "America/Adak" },
        { label: "America/Anchorage", value: "America/Anchorage" },
        { label: "America/Anguilla", value: "America/Anguilla" },
        { label: "America/Antigua", value: "America/Antigua" },
        { label: "America/Araguaina", value: "America/Araguaina" },
        {
          label: "America/Argentina/Buenos_Aires",
          value: "America/Argentina/Buenos_Aires"
        },
        {
          label: "America/Argentina/Catamarca",
          value: "America/Argentina/Catamarca"
        },
        {
          label: "America/Argentina/ComodRivadavia",
          value: "America/Argentina/ComodRivadavia"
        },
        {
          label: "America/Argentina/Cordoba",
          value: "America/Argentina/Cordoba"
        },
        {
          label: "America/Argentina/Jujuy",
          value: "America/Argentina/Jujuy"
        },
        {
          label: "America/Argentina/La_Rioja",
          value: "America/Argentina/La_Rioja"
        },
        {
          label: "America/Argentina/Mendoza",
          value: "America/Argentina/Mendoza"
        },
        {
          label: "America/Argentina/Rio_Gallegos",
          value: "America/Argentina/Rio_Gallegos"
        },
        {
          label: "America/Argentina/Salta",
          value: "America/Argentina/Salta"
        },
        {
          label: "America/Argentina/San_Juan",
          value: "America/Argentina/San_Juan"
        },
        {
          label: "America/Argentina/San_Luis",
          value: "America/Argentina/San_Luis"
        },
        {
          label: "America/Argentina/Tucuman",
          value: "America/Argentina/Tucuman"
        },
        {
          label: "America/Argentina/Ushuaia",
          value: "America/Argentina/Ushuaia"
        },
        { label: "America/Aruba", value: "America/Aruba" },
        { label: "America/Asuncion", value: "America/Asuncion" },
        { label: "America/Atikokan", value: "America/Atikokan" },
        { label: "America/Atka", value: "America/Atka" },
        { label: "America/Bahia", value: "America/Bahia" },
        { label: "America/Bahia_Banderas", value: "America/Bahia_Banderas" },
        { label: "America/Barbados", value: "America/Barbados" },
        { label: "America/Belem", value: "America/Belem" },
        { label: "America/Belize", value: "America/Belize" },
        { label: "America/Blanc-Sablon", value: "America/Blanc-Sablon" },
        { label: "America/Boa_Vista", value: "America/Boa_Vista" },
        { label: "America/Bogota", value: "America/Bogota" },
        { label: "America/Boise", value: "America/Boise" },
        { label: "America/Buenos_Aires", value: "America/Buenos_Aires" },
        { label: "America/Cambridge_Bay", value: "America/Cambridge_Bay" },
        { label: "America/Campo_Grande", value: "America/Campo_Grande" },
        { label: "America/Cancun", value: "America/Cancun" },
        { label: "America/Caracas", value: "America/Caracas" },
        { label: "America/Catamarca", value: "America/Catamarca" },
        { label: "America/Cayenne", value: "America/Cayenne" },
        { label: "America/Cayman", value: "America/Cayman" },
        { label: "America/Chicago", value: "America/Chicago" },
        { label: "America/Chihuahua", value: "America/Chihuahua" },
        { label: "America/Ciudad_Juarez", value: "America/Ciudad_Juarez" },
        { label: "America/Coral_Harbour", value: "America/Coral_Harbour" },
        { label: "America/Cordoba", value: "America/Cordoba" },
        { label: "America/Costa_Rica", value: "America/Costa_Rica" },
        { label: "America/Coyhaique", value: "America/Coyhaique" },
        { label: "America/Creston", value: "America/Creston" },
        { label: "America/Cuiaba", value: "America/Cuiaba" },
        { label: "America/Curacao", value: "America/Curacao" },
        { label: "America/Danmarkshavn", value: "America/Danmarkshavn" },
        { label: "America/Dawson", value: "America/Dawson" },
        { label: "America/Dawson_Creek", value: "America/Dawson_Creek" },
        { label: "America/Denver", value: "America/Denver" },
        { label: "America/Detroit", value: "America/Detroit" },
        { label: "America/Dominica", value: "America/Dominica" },
        { label: "America/Edmonton", value: "America/Edmonton" },
        { label: "America/Eirunepe", value: "America/Eirunepe" },
        { label: "America/El_Salvador", value: "America/El_Salvador" },
        { label: "America/Ensenada", value: "America/Ensenada" },
        { label: "America/Fort_Nelson", value: "America/Fort_Nelson" },
        { label: "America/Fort_Wayne", value: "America/Fort_Wayne" },
        { label: "America/Fortaleza", value: "America/Fortaleza" },
        { label: "America/Glace_Bay", value: "America/Glace_Bay" },
        { label: "America/Godthab", value: "America/Godthab" },
        { label: "America/Goose_Bay", value: "America/Goose_Bay" },
        { label: "America/Grand_Turk", value: "America/Grand_Turk" },
        { label: "America/Grenada", value: "America/Grenada" },
        { label: "America/Guadeloupe", value: "America/Guadeloupe" },
        { label: "America/Guatemala", value: "America/Guatemala" },
        { label: "America/Guayaquil", value: "America/Guayaquil" },
        { label: "America/Guyana", value: "America/Guyana" },
        { label: "America/Halifax", value: "America/Halifax" },
        { label: "America/Havana", value: "America/Havana" },
        { label: "America/Hermosillo", value: "America/Hermosillo" },
        {
          label: "America/Indiana/Indianapolis",
          value: "America/Indiana/Indianapolis"
        },
        { label: "America/Indiana/Knox", value: "America/Indiana/Knox" },
        {
          label: "America/Indiana/Marengo",
          value: "America/Indiana/Marengo"
        },
        {
          label: "America/Indiana/Petersburg",
          value: "America/Indiana/Petersburg"
        },
        {
          label: "America/Indiana/Tell_City",
          value: "America/Indiana/Tell_City"
        },
        { label: "America/Indiana/Vevay", value: "America/Indiana/Vevay" },
        {
          label: "America/Indiana/Vincennes",
          value: "America/Indiana/Vincennes"
        },
        {
          label: "America/Indiana/Winamac",
          value: "America/Indiana/Winamac"
        },
        { label: "America/Indianapolis", value: "America/Indianapolis" },
        { label: "America/Inuvik", value: "America/Inuvik" },
        { label: "America/Iqaluit", value: "America/Iqaluit" },
        { label: "America/Jamaica", value: "America/Jamaica" },
        { label: "America/Jujuy", value: "America/Jujuy" },
        { label: "America/Juneau", value: "America/Juneau" },
        {
          label: "America/Kentucky/Louisville",
          value: "America/Kentucky/Louisville"
        },
        {
          label: "America/Kentucky/Monticello",
          value: "America/Kentucky/Monticello"
        },
        { label: "America/Knox_IN", value: "America/Knox_IN" },
        { label: "America/Kralendijk", value: "America/Kralendijk" },
        { label: "America/La_Paz", value: "America/La_Paz" },
        { label: "America/Lima", value: "America/Lima" },
        { label: "America/Los_Angeles", value: "America/Los_Angeles" },
        { label: "America/Louisville", value: "America/Louisville" },
        { label: "America/Lower_Princes", value: "America/Lower_Princes" },
        { label: "America/Maceio", value: "America/Maceio" },
        { label: "America/Managua", value: "America/Managua" },
        { label: "America/Manaus", value: "America/Manaus" },
        { label: "America/Marigot", value: "America/Marigot" },
        { label: "America/Martinique", value: "America/Martinique" },
        { label: "America/Matamoros", value: "America/Matamoros" },
        { label: "America/Mazatlan", value: "America/Mazatlan" },
        { label: "America/Mendoza", value: "America/Mendoza" },
        { label: "America/Menominee", value: "America/Menominee" },
        { label: "America/Merida", value: "America/Merida" },
        { label: "America/Metlakatla", value: "America/Metlakatla" },
        { label: "America/Mexico_City", value: "America/Mexico_City" },
        { label: "America/Miquelon", value: "America/Miquelon" },
        { label: "America/Moncton", value: "America/Moncton" },
        { label: "America/Monterrey", value: "America/Monterrey" },
        { label: "America/Montevideo", value: "America/Montevideo" },
        { label: "America/Montreal", value: "America/Montreal" },
        { label: "America/Montserrat", value: "America/Montserrat" },
        { label: "America/Nassau", value: "America/Nassau" },
        { label: "America/New_York", value: "America/New_York" },
        { label: "America/Nipigon", value: "America/Nipigon" },
        { label: "America/Nome", value: "America/Nome" },
        { label: "America/Noronha", value: "America/Noronha" },
        {
          label: "America/North_Dakota/Beulah",
          value: "America/North_Dakota/Beulah"
        },
        {
          label: "America/North_Dakota/Center",
          value: "America/North_Dakota/Center"
        },
        {
          label: "America/North_Dakota/New_Salem",
          value: "America/North_Dakota/New_Salem"
        },
        { label: "America/Nuuk", value: "America/Nuuk" },
        { label: "America/Ojinaga", value: "America/Ojinaga" },
        { label: "America/Panama", value: "America/Panama" },
        { label: "America/Pangnirtung", value: "America/Pangnirtung" },
        { label: "America/Paramaribo", value: "America/Paramaribo" },
        { label: "America/Phoenix", value: "America/Phoenix" },
        { label: "America/Port-au-Prince", value: "America/Port-au-Prince" },
        { label: "America/Port_of_Spain", value: "America/Port_of_Spain" },
        { label: "America/Porto_Acre", value: "America/Porto_Acre" },
        { label: "America/Porto_Velho", value: "America/Porto_Velho" },
        { label: "America/Puerto_Rico", value: "America/Puerto_Rico" },
        { label: "America/Punta_Arenas", value: "America/Punta_Arenas" },
        { label: "America/Rainy_River", value: "America/Rainy_River" },
        { label: "America/Rankin_Inlet", value: "America/Rankin_Inlet" },
        { label: "America/Recife", value: "America/Recife" },
        { label: "America/Regina", value: "America/Regina" },
        { label: "America/Resolute", value: "America/Resolute" },
        { label: "America/Rio_Branco", value: "America/Rio_Branco" },
        { label: "America/Rosario", value: "America/Rosario" },
        { label: "America/Santa_Isabel", value: "America/Santa_Isabel" },
        { label: "America/Santarem", value: "America/Santarem" },
        { label: "America/Santiago", value: "America/Santiago" },
        { label: "America/Santo_Domingo", value: "America/Santo_Domingo" },
        { label: "America/Sao_Paulo", value: "America/Sao_Paulo" },
        { label: "America/Scoresbysund", value: "America/Scoresbysund" },
        { label: "America/Shiprock", value: "America/Shiprock" },
        { label: "America/Sitka", value: "America/Sitka" },
        { label: "America/St_Barthelemy", value: "America/St_Barthelemy" },
        { label: "America/St_Johns", value: "America/St_Johns" },
        { label: "America/St_Kitts", value: "America/St_Kitts" },
        { label: "America/St_Lucia", value: "America/St_Lucia" },
        { label: "America/St_Thomas", value: "America/St_Thomas" },
        { label: "America/St_Vincent", value: "America/St_Vincent" },
        { label: "America/Swift_Current", value: "America/Swift_Current" },
        { label: "America/Tegucigalpa", value: "America/Tegucigalpa" },
        { label: "America/Thule", value: "America/Thule" },
        { label: "America/Thunder_Bay", value: "America/Thunder_Bay" },
        { label: "America/Tijuana", value: "America/Tijuana" },
        { label: "America/Toronto", value: "America/Toronto" },
        { label: "America/Tortola", value: "America/Tortola" },
        { label: "America/Vancouver", value: "America/Vancouver" },
        { label: "America/Virgin", value: "America/Virgin" },
        { label: "America/Whitehorse", value: "America/Whitehorse" },
        { label: "America/Winnipeg", value: "America/Winnipeg" },
        { label: "America/Yakutat", value: "America/Yakutat" },
        { label: "America/Yellowknife", value: "America/Yellowknife" },
        { label: "Antarctica/Casey", value: "Antarctica/Casey" },
        { label: "Antarctica/Davis", value: "Antarctica/Davis" },
        {
          label: "Antarctica/DumontDUrville",
          value: "Antarctica/DumontDUrville"
        },
        { label: "Antarctica/Macquarie", value: "Antarctica/Macquarie" },
        { label: "Antarctica/Mawson", value: "Antarctica/Mawson" },
        { label: "Antarctica/McMurdo", value: "Antarctica/McMurdo" },
        { label: "Antarctica/Palmer", value: "Antarctica/Palmer" },
        { label: "Antarctica/Rothera", value: "Antarctica/Rothera" },
        { label: "Antarctica/South_Pole", value: "Antarctica/South_Pole" },
        { label: "Antarctica/Syowa", value: "Antarctica/Syowa" },
        { label: "Antarctica/Troll", value: "Antarctica/Troll" },
        { label: "Antarctica/Vostok", value: "Antarctica/Vostok" },
        { label: "Arctic/Longyearbyen", value: "Arctic/Longyearbyen" },
        { label: "Asia/Aden", value: "Asia/Aden" },
        { label: "Asia/Almaty", value: "Asia/Almaty" },
        { label: "Asia/Amman", value: "Asia/Amman" },
        { label: "Asia/Anadyr", value: "Asia/Anadyr" },
        { label: "Asia/Aqtau", value: "Asia/Aqtau" },
        { label: "Asia/Aqtobe", value: "Asia/Aqtobe" },
        { label: "Asia/Ashgabat", value: "Asia/Ashgabat" },
        { label: "Asia/Ashkhabad", value: "Asia/Ashkhabad" },
        { label: "Asia/Atyrau", value: "Asia/Atyrau" },
        { label: "Asia/Baghdad", value: "Asia/Baghdad" },
        { label: "Asia/Bahrain", value: "Asia/Bahrain" },
        { label: "Asia/Baku", value: "Asia/Baku" },
        { label: "Asia/Bangkok", value: "Asia/Bangkok" },
        { label: "Asia/Barnaul", value: "Asia/Barnaul" },
        { label: "Asia/Beirut", value: "Asia/Beirut" },
        { label: "Asia/Bishkek", value: "Asia/Bishkek" },
        { label: "Asia/Brunei", value: "Asia/Brunei" },
        { label: "Asia/Calcutta", value: "Asia/Calcutta" },
        { label: "Asia/Chita", value: "Asia/Chita" },
        { label: "Asia/Choibalsan", value: "Asia/Choibalsan" },
        { label: "Asia/Chongqing", value: "Asia/Chongqing" },
        { label: "Asia/Chungking", value: "Asia/Chungking" },
        { label: "Asia/Colombo", value: "Asia/Colombo" },
        { label: "Asia/Dacca", value: "Asia/Dacca" },
        { label: "Asia/Damascus", value: "Asia/Damascus" },
        { label: "Asia/Dhaka", value: "Asia/Dhaka" },
        { label: "Asia/Dili", value: "Asia/Dili" },
        { label: "Asia/Dubai", value: "Asia/Dubai" },
        { label: "Asia/Dushanbe", value: "Asia/Dushanbe" },
        { label: "Asia/Famagusta", value: "Asia/Famagusta" },
        { label: "Asia/Gaza", value: "Asia/Gaza" },
        { label: "Asia/Harbin", value: "Asia/Harbin" },
        { label: "Asia/Hebron", value: "Asia/Hebron" },
        { label: "Asia/Ho_Chi_Minh", value: "Asia/Ho_Chi_Minh" },
        { label: "Asia/Hong_Kong", value: "Asia/Hong_Kong" },
        { label: "Asia/Hovd", value: "Asia/Hovd" },
        { label: "Asia/Irkutsk", value: "Asia/Irkutsk" },
        { label: "Asia/Istanbul", value: "Asia/Istanbul" },
        { label: "Asia/Jakarta", value: "Asia/Jakarta" },
        { label: "Asia/Jayapura", value: "Asia/Jayapura" },
        { label: "Asia/Jerusalem", value: "Asia/Jerusalem" },
        { label: "Asia/Kabul", value: "Asia/Kabul" },
        { label: "Asia/Kamchatka", value: "Asia/Kamchatka" },
        { label: "Asia/Karachi", value: "Asia/Karachi" },
        { label: "Asia/Kashgar", value: "Asia/Kashgar" },
        { label: "Asia/Kathmandu", value: "Asia/Kathmandu" },
        { label: "Asia/Katmandu", value: "Asia/Katmandu" },
        { label: "Asia/Khandyga", value: "Asia/Khandyga" },
        { label: "Asia/Kolkata", value: "Asia/Kolkata" },
        { label: "Asia/Krasnoyarsk", value: "Asia/Krasnoyarsk" },
        { label: "Asia/Kuala_Lumpur", value: "Asia/Kuala_Lumpur" },
        { label: "Asia/Kuching", value: "Asia/Kuching" },
        { label: "Asia/Kuwait", value: "Asia/Kuwait" },
        { label: "Asia/Macao", value: "Asia/Macao" },
        { label: "Asia/Macau", value: "Asia/Macau" },
        { label: "Asia/Magadan", value: "Asia/Magadan" },
        { label: "Asia/Makassar", value: "Asia/Makassar" },
        { label: "Asia/Manila", value: "Asia/Manila" },
        { label: "Asia/Muscat", value: "Asia/Muscat" },
        { label: "Asia/Nicosia", value: "Asia/Nicosia" },
        { label: "Asia/Novokuznetsk", value: "Asia/Novokuznetsk" },
        { label: "Asia/Novosibirsk", value: "Asia/Novosibirsk" },
        { label: "Asia/Omsk", value: "Asia/Omsk" },
        { label: "Asia/Oral", value: "Asia/Oral" },
        { label: "Asia/Phnom_Penh", value: "Asia/Phnom_Penh" },
        { label: "Asia/Pontianak", value: "Asia/Pontianak" },
        { label: "Asia/Pyongyang", value: "Asia/Pyongyang" },
        { label: "Asia/Qatar", value: "Asia/Qatar" },
        { label: "Asia/Qostanay", value: "Asia/Qostanay" },
        { label: "Asia/Qyzylorda", value: "Asia/Qyzylorda" },
        { label: "Asia/Rangoon", value: "Asia/Rangoon" },
        { label: "Asia/Riyadh", value: "Asia/Riyadh" },
        { label: "Asia/Saigon", value: "Asia/Saigon" },
        { label: "Asia/Sakhalin", value: "Asia/Sakhalin" },
        { label: "Asia/Samarkand", value: "Asia/Samarkand" },
        { label: "Asia/Seoul", value: "Asia/Seoul" },
        { label: "Asia/Shanghai", value: "Asia/Shanghai" },
        { label: "Asia/Singapore", value: "Asia/Singapore" },
        { label: "Asia/Srednekolymsk", value: "Asia/Srednekolymsk" },
        { label: "Asia/Taipei", value: "Asia/Taipei" },
        { label: "Asia/Tashkent", value: "Asia/Tashkent" },
        { label: "Asia/Tbilisi", value: "Asia/Tbilisi" },
        { label: "Asia/Tehran", value: "Asia/Tehran" },
        { label: "Asia/Tel_Aviv", value: "Asia/Tel_Aviv" },
        { label: "Asia/Thimbu", value: "Asia/Thimbu" },
        { label: "Asia/Thimphu", value: "Asia/Thimphu" },
        { label: "Asia/Tokyo", value: "Asia/Tokyo" },
        { label: "Asia/Tomsk", value: "Asia/Tomsk" },
        { label: "Asia/Ujung_Pandang", value: "Asia/Ujung_Pandang" },
        { label: "Asia/Ulaanbaatar", value: "Asia/Ulaanbaatar" },
        { label: "Asia/Ulan_Bator", value: "Asia/Ulan_Bator" },
        { label: "Asia/Urumqi", value: "Asia/Urumqi" },
        { label: "Asia/Ust-Nera", value: "Asia/Ust-Nera" },
        { label: "Asia/Vientiane", value: "Asia/Vientiane" },
        { label: "Asia/Vladivostok", value: "Asia/Vladivostok" },
        { label: "Asia/Yakutsk", value: "Asia/Yakutsk" },
        { label: "Asia/Yangon", value: "Asia/Yangon" },
        { label: "Asia/Yekaterinburg", value: "Asia/Yekaterinburg" },
        { label: "Asia/Yerevan", value: "Asia/Yerevan" },
        { label: "Atlantic/Azores", value: "Atlantic/Azores" },
        { label: "Atlantic/Bermuda", value: "Atlantic/Bermuda" },
        { label: "Atlantic/Canary", value: "Atlantic/Canary" },
        { label: "Atlantic/Cape_Verde", value: "Atlantic/Cape_Verde" },
        { label: "Atlantic/Faeroe", value: "Atlantic/Faeroe" },
        { label: "Atlantic/Faroe", value: "Atlantic/Faroe" },
        { label: "Atlantic/Jan_Mayen", value: "Atlantic/Jan_Mayen" },
        { label: "Atlantic/Madeira", value: "Atlantic/Madeira" },
        { label: "Atlantic/Reykjavik", value: "Atlantic/Reykjavik" },
        { label: "Atlantic/South_Georgia", value: "Atlantic/South_Georgia" },
        { label: "Atlantic/St_Helena", value: "Atlantic/St_Helena" },
        { label: "Atlantic/Stanley", value: "Atlantic/Stanley" },
        { label: "Australia/ACT", value: "Australia/ACT" },
        { label: "Australia/Adelaide", value: "Australia/Adelaide" },
        { label: "Australia/Brisbane", value: "Australia/Brisbane" },
        { label: "Australia/Broken_Hill", value: "Australia/Broken_Hill" },
        { label: "Australia/Canberra", value: "Australia/Canberra" },
        { label: "Australia/Currie", value: "Australia/Currie" },
        { label: "Australia/Darwin", value: "Australia/Darwin" },
        { label: "Australia/Eucla", value: "Australia/Eucla" },
        { label: "Australia/Hobart", value: "Australia/Hobart" },
        { label: "Australia/LHI", value: "Australia/LHI" },
        { label: "Australia/Lindeman", value: "Australia/Lindeman" },
        { label: "Australia/Lord_Howe", value: "Australia/Lord_Howe" },
        { label: "Australia/Melbourne", value: "Australia/Melbourne" },
        { label: "Australia/NSW", value: "Australia/NSW" },
        { label: "Australia/North", value: "Australia/North" },
        { label: "Australia/Perth", value: "Australia/Perth" },
        { label: "Australia/Queensland", value: "Australia/Queensland" },
        { label: "Australia/South", value: "Australia/South" },
        { label: "Australia/Sydney", value: "Australia/Sydney" },
        { label: "Australia/Tasmania", value: "Australia/Tasmania" },
        { label: "Australia/Victoria", value: "Australia/Victoria" },
        { label: "Australia/West", value: "Australia/West" },
        { label: "Australia/Yancowinna", value: "Australia/Yancowinna" },
        { label: "Brazil/Acre", value: "Brazil/Acre" },
        { label: "Brazil/DeNoronha", value: "Brazil/DeNoronha" },
        { label: "Brazil/East", value: "Brazil/East" },
        { label: "Brazil/West", value: "Brazil/West" },
        { label: "CET", value: "CET" },
        { label: "CST6CDT", value: "CST6CDT" },
        { label: "Canada/Atlantic", value: "Canada/Atlantic" },
        { label: "Canada/Central", value: "Canada/Central" },
        { label: "Canada/Eastern", value: "Canada/Eastern" },
        { label: "Canada/Mountain", value: "Canada/Mountain" },
        { label: "Canada/Newfoundland", value: "Canada/Newfoundland" },
        { label: "Canada/Pacific", value: "Canada/Pacific" },
        { label: "Canada/Saskatchewan", value: "Canada/Saskatchewan" },
        { label: "Canada/Yukon", value: "Canada/Yukon" },
        { label: "Chile/Continental", value: "Chile/Continental" },
        { label: "Chile/EasterIsland", value: "Chile/EasterIsland" },
        { label: "Cuba", value: "Cuba" },
        { label: "EET", value: "EET" },
        { label: "EST", value: "EST" },
        { label: "EST5EDT", value: "EST5EDT" },
        { label: "Egypt", value: "Egypt" },
        { label: "Eire", value: "Eire" },
        { label: "Etc/GMT", value: "Etc/GMT" },
        { label: "Etc/GMT+0", value: "Etc/GMT+0" },
        { label: "Etc/GMT+1", value: "Etc/GMT+1" },
        { label: "Etc/GMT+10", value: "Etc/GMT+10" },
        { label: "Etc/GMT+11", value: "Etc/GMT+11" },
        { label: "Etc/GMT+12", value: "Etc/GMT+12" },
        { label: "Etc/GMT+2", value: "Etc/GMT+2" },
        { label: "Etc/GMT+3", value: "Etc/GMT+3" },
        { label: "Etc/GMT+4", value: "Etc/GMT+4" },
        { label: "Etc/GMT+5", value: "Etc/GMT+5" },
        { label: "Etc/GMT+6", value: "Etc/GMT+6" },
        { label: "Etc/GMT+7", value: "Etc/GMT+7" },
        { label: "Etc/GMT+8", value: "Etc/GMT+8" },
        { label: "Etc/GMT+9", value: "Etc/GMT+9" },
        { label: "Etc/GMT-0", value: "Etc/GMT-0" },
        { label: "Etc/GMT-1", value: "Etc/GMT-1" },
        { label: "Etc/GMT-10", value: "Etc/GMT-10" },
        { label: "Etc/GMT-11", value: "Etc/GMT-11" },
        { label: "Etc/GMT-12", value: "Etc/GMT-12" },
        { label: "Etc/GMT-13", value: "Etc/GMT-13" },
        { label: "Etc/GMT-14", value: "Etc/GMT-14" },
        { label: "Etc/GMT-2", value: "Etc/GMT-2" },
        { label: "Etc/GMT-3", value: "Etc/GMT-3" },
        { label: "Etc/GMT-4", value: "Etc/GMT-4" },
        { label: "Etc/GMT-5", value: "Etc/GMT-5" },
        { label: "Etc/GMT-6", value: "Etc/GMT-6" },
        { label: "Etc/GMT-7", value: "Etc/GMT-7" },
        { label: "Etc/GMT-8", value: "Etc/GMT-8" },
        { label: "Etc/GMT-9", value: "Etc/GMT-9" },
        { label: "Etc/GMT0", value: "Etc/GMT0" },
        { label: "Etc/Greenwich", value: "Etc/Greenwich" },
        { label: "Etc/UCT", value: "Etc/UCT" },
        { label: "Etc/UTC", value: "Etc/UTC" },
        { label: "Etc/Universal", value: "Etc/Universal" },
        { label: "Etc/Zulu", value: "Etc/Zulu" },
        { label: "Europe/Amsterdam", value: "Europe/Amsterdam" },
        { label: "Europe/Andorra", value: "Europe/Andorra" },
        { label: "Europe/Astrakhan", value: "Europe/Astrakhan" },
        { label: "Europe/Athens", value: "Europe/Athens" },
        { label: "Europe/Belfast", value: "Europe/Belfast" },
        { label: "Europe/Belgrade", value: "Europe/Belgrade" },
        { label: "Europe/Berlin", value: "Europe/Berlin" },
        { label: "Europe/Bratislava", value: "Europe/Bratislava" },
        { label: "Europe/Brussels", value: "Europe/Brussels" },
        { label: "Europe/Bucharest", value: "Europe/Bucharest" },
        { label: "Europe/Budapest", value: "Europe/Budapest" },
        { label: "Europe/Busingen", value: "Europe/Busingen" },
        { label: "Europe/Chisinau", value: "Europe/Chisinau" },
        { label: "Europe/Copenhagen", value: "Europe/Copenhagen" },
        { label: "Europe/Dublin", value: "Europe/Dublin" },
        { label: "Europe/Gibraltar", value: "Europe/Gibraltar" },
        { label: "Europe/Guernsey", value: "Europe/Guernsey" },
        { label: "Europe/Helsinki", value: "Europe/Helsinki" },
        { label: "Europe/Isle_of_Man", value: "Europe/Isle_of_Man" },
        { label: "Europe/Istanbul", value: "Europe/Istanbul" },
        { label: "Europe/Jersey", value: "Europe/Jersey" },
        { label: "Europe/Kaliningrad", value: "Europe/Kaliningrad" },
        { label: "Europe/Kiev", value: "Europe/Kiev" },
        { label: "Europe/Kirov", value: "Europe/Kirov" },
        { label: "Europe/Kyiv", value: "Europe/Kyiv" },
        { label: "Europe/Lisbon", value: "Europe/Lisbon" },
        { label: "Europe/Ljubljana", value: "Europe/Ljubljana" },
        { label: "Europe/London", value: "Europe/London" },
        { label: "Europe/Luxembourg", value: "Europe/Luxembourg" },
        { label: "Europe/Madrid", value: "Europe/Madrid" },
        { label: "Europe/Malta", value: "Europe/Malta" },
        { label: "Europe/Mariehamn", value: "Europe/Mariehamn" },
        { label: "Europe/Minsk", value: "Europe/Minsk" },
        { label: "Europe/Monaco", value: "Europe/Monaco" },
        { label: "Europe/Moscow", value: "Europe/Moscow" },
        { label: "Europe/Nicosia", value: "Europe/Nicosia" },
        { label: "Europe/Oslo", value: "Europe/Oslo" },
        { label: "Europe/Paris", value: "Europe/Paris" },
        { label: "Europe/Podgorica", value: "Europe/Podgorica" },
        { label: "Europe/Prague", value: "Europe/Prague" },
        { label: "Europe/Riga", value: "Europe/Riga" },
        { label: "Europe/Rome", value: "Europe/Rome" },
        { label: "Europe/Samara", value: "Europe/Samara" },
        { label: "Europe/San_Marino", value: "Europe/San_Marino" },
        { label: "Europe/Sarajevo", value: "Europe/Sarajevo" },
        { label: "Europe/Saratov", value: "Europe/Saratov" },
        { label: "Europe/Simferopol", value: "Europe/Simferopol" },
        { label: "Europe/Skopje", value: "Europe/Skopje" },
        { label: "Europe/Sofia", value: "Europe/Sofia" },
        { label: "Europe/Stockholm", value: "Europe/Stockholm" },
        { label: "Europe/Tallinn", value: "Europe/Tallinn" },
        { label: "Europe/Tirane", value: "Europe/Tirane" },
        { label: "Europe/Tiraspol", value: "Europe/Tiraspol" },
        { label: "Europe/Ulyanovsk", value: "Europe/Ulyanovsk" },
        { label: "Europe/Uzhgorod", value: "Europe/Uzhgorod" },
        { label: "Europe/Vaduz", value: "Europe/Vaduz" },
        { label: "Europe/Vatican", value: "Europe/Vatican" },
        { label: "Europe/Vienna", value: "Europe/Vienna" },
        { label: "Europe/Vilnius", value: "Europe/Vilnius" },
        { label: "Europe/Volgograd", value: "Europe/Volgograd" },
        { label: "Europe/Warsaw", value: "Europe/Warsaw" },
        { label: "Europe/Zagreb", value: "Europe/Zagreb" },
        { label: "Europe/Zaporozhye", value: "Europe/Zaporozhye" },
        { label: "Europe/Zurich", value: "Europe/Zurich" },
        { label: "GB", value: "GB" },
        { label: "GB-Eire", value: "GB-Eire" },
        { label: "GMT", value: "GMT" },
        { label: "GMT+0", value: "GMT+0" },
        { label: "GMT-0", value: "GMT-0" },
        { label: "GMT0", value: "GMT0" },
        { label: "Greenwich", value: "Greenwich" },
        { label: "HST", value: "HST" },
        { label: "Hongkong", value: "Hongkong" },
        { label: "Iceland", value: "Iceland" },
        { label: "Indian/Antananarivo", value: "Indian/Antananarivo" },
        { label: "Indian/Chagos", value: "Indian/Chagos" },
        { label: "Indian/Christmas", value: "Indian/Christmas" },
        { label: "Indian/Cocos", value: "Indian/Cocos" },
        { label: "Indian/Comoro", value: "Indian/Comoro" },
        { label: "Indian/Kerguelen", value: "Indian/Kerguelen" },
        { label: "Indian/Mahe", value: "Indian/Mahe" },
        { label: "Indian/Maldives", value: "Indian/Maldives" },
        { label: "Indian/Mauritius", value: "Indian/Mauritius" },
        { label: "Indian/Mayotte", value: "Indian/Mayotte" },
        { label: "Indian/Reunion", value: "Indian/Reunion" },
        { label: "Iran", value: "Iran" },
        { label: "Israel", value: "Israel" },
        { label: "Jamaica", value: "Jamaica" },
        { label: "Japan", value: "Japan" },
        { label: "Kwajalein", value: "Kwajalein" },
        { label: "Libya", value: "Libya" },
        { label: "MET", value: "MET" },
        { label: "MST", value: "MST" },
        { label: "MST7MDT", value: "MST7MDT" },
        { label: "Mexico/BajaNorte", value: "Mexico/BajaNorte" },
        { label: "Mexico/BajaSur", value: "Mexico/BajaSur" },
        { label: "Mexico/General", value: "Mexico/General" },
        { label: "NZ", value: "NZ" },
        { label: "NZ-CHAT", value: "NZ-CHAT" },
        { label: "Navajo", value: "Navajo" },
        { label: "PRC", value: "PRC" },
        { label: "PST8PDT", value: "PST8PDT" },
        { label: "Pacific/Apia", value: "Pacific/Apia" },
        { label: "Pacific/Auckland", value: "Pacific/Auckland" },
        { label: "Pacific/Bougainville", value: "Pacific/Bougainville" },
        { label: "Pacific/Chatham", value: "Pacific/Chatham" },
        { label: "Pacific/Chuuk", value: "Pacific/Chuuk" },
        { label: "Pacific/Easter", value: "Pacific/Easter" },
        { label: "Pacific/Efate", value: "Pacific/Efate" },
        { label: "Pacific/Enderbury", value: "Pacific/Enderbury" },
        { label: "Pacific/Fakaofo", value: "Pacific/Fakaofo" },
        { label: "Pacific/Fiji", value: "Pacific/Fiji" },
        { label: "Pacific/Funafuti", value: "Pacific/Funafuti" },
        { label: "Pacific/Galapagos", value: "Pacific/Galapagos" },
        { label: "Pacific/Gambier", value: "Pacific/Gambier" },
        { label: "Pacific/Guadalcanal", value: "Pacific/Guadalcanal" },
        { label: "Pacific/Guam", value: "Pacific/Guam" },
        { label: "Pacific/Honolulu", value: "Pacific/Honolulu" },
        { label: "Pacific/Johnston", value: "Pacific/Johnston" },
        { label: "Pacific/Kanton", value: "Pacific/Kanton" },
        { label: "Pacific/Kiritimati", value: "Pacific/Kiritimati" },
        { label: "Pacific/Kosrae", value: "Pacific/Kosrae" },
        { label: "Pacific/Kwajalein", value: "Pacific/Kwajalein" },
        { label: "Pacific/Majuro", value: "Pacific/Majuro" },
        { label: "Pacific/Marquesas", value: "Pacific/Marquesas" },
        { label: "Pacific/Midway", value: "Pacific/Midway" },
        { label: "Pacific/Nauru", value: "Pacific/Nauru" },
        { label: "Pacific/Niue", value: "Pacific/Niue" },
        { label: "Pacific/Norfolk", value: "Pacific/Norfolk" },
        { label: "Pacific/Noumea", value: "Pacific/Noumea" },
        { label: "Pacific/Pago_Pago", value: "Pacific/Pago_Pago" },
        { label: "Pacific/Palau", value: "Pacific/Palau" },
        { label: "Pacific/Pitcairn", value: "Pacific/Pitcairn" },
        { label: "Pacific/Pohnpei", value: "Pacific/Pohnpei" },
        { label: "Pacific/Ponape", value: "Pacific/Ponape" },
        { label: "Pacific/Port_Moresby", value: "Pacific/Port_Moresby" },
        { label: "Pacific/Rarotonga", value: "Pacific/Rarotonga" },
        { label: "Pacific/Saipan", value: "Pacific/Saipan" },
        { label: "Pacific/Samoa", value: "Pacific/Samoa" },
        { label: "Pacific/Tahiti", value: "Pacific/Tahiti" },
        { label: "Pacific/Tarawa", value: "Pacific/Tarawa" },
        { label: "Pacific/Tongatapu", value: "Pacific/Tongatapu" },
        { label: "Pacific/Truk", value: "Pacific/Truk" },
        { label: "Pacific/Wake", value: "Pacific/Wake" },
        { label: "Pacific/Wallis", value: "Pacific/Wallis" },
        { label: "Pacific/Yap", value: "Pacific/Yap" },
        { label: "Poland", value: "Poland" },
        { label: "Portugal", value: "Portugal" },
        { label: "ROC", value: "ROC" },
        { label: "ROK", value: "ROK" },
        { label: "Singapore", value: "Singapore" },
        { label: "Turkey", value: "Turkey" },
        { label: "UCT", value: "UCT" },
        { label: "US/Alaska", value: "US/Alaska" },
        { label: "US/Aleutian", value: "US/Aleutian" },
        { label: "US/Arizona", value: "US/Arizona" },
        { label: "US/Central", value: "US/Central" },
        { label: "US/East-Indiana", value: "US/East-Indiana" },
        { label: "US/Eastern", value: "US/Eastern" },
        { label: "US/Hawaii", value: "US/Hawaii" },
        { label: "US/Indiana-Starke", value: "US/Indiana-Starke" },
        { label: "US/Michigan", value: "US/Michigan" },
        { label: "US/Mountain", value: "US/Mountain" },
        { label: "US/Pacific", value: "US/Pacific" },
        { label: "US/Samoa", value: "US/Samoa" },
        { label: "UTC", value: "UTC" },
        { label: "Universal", value: "Universal" },
        { label: "W-SU", value: "W-SU" },
        { label: "WET", value: "WET" },
        { label: "Zulu", value: "Zulu" }
      ],
      default: { label: "UTC", value: "UTC" }
    },
    parse: function(value) {
      if (typeof value !== "string" || value.trim() === "") {
        throw new Error("Timezone cannot be empty");
      }
      return value;
    }
  }
}, "outputSchema": {}, "groups": ["Control Flow", "Utility"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/extract_with_a_i.ts
var node3 = { "name": "Extract With AI", "id": "extract_with_a_i", "descripition": "Extracts specific information from text using AI analysis based on provided instructions", "inputSchema": {
  rawText: {
    name: "Raw Text",
    description: "The text to extract information from",
    validationSchema: /.*/,
    errorMessage: "Raw text must be a string",
    required: true,
    input: {
      type: "textarea",
      maxLength: 1e4,
      minLength: 1,
      placeholder: "Enter the text to analyze"
    },
    parse: (value) => value
  },
  description: {
    name: "Extraction Description",
    description: "Describe what information to extract from the raw text",
    validationSchema: /.*/,
    errorMessage: "Description must be a string",
    required: true,
    input: {
      type: "textarea",
      maxLength: 1e3,
      minLength: 1,
      placeholder: "Describe what to extract (e.g., 'Extract the name, email, and phone number')"
    },
    parse: (value) => value
  }
}, "outputSchema": {
  extractedData: {
    name: "Extracted Data",
    description: "The data extracted from the raw text",
    example: "Extracted information",
    validator: (value) => typeof value === "string"
  }
}, "groups": ["Data", "AI"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/add_to_sms_campaign.ts
var node4 = { "name": "Add To SMS Campaign", "id": "add_to_sms_campaign", "descripition": "Adds a contact to an SMS campaign identified by campaign ID", "inputSchema": {
  phone: {
    name: "Phone Number",
    description: "The phone number to add to the SMS campaign",
    validationSchema: /^\+?[1-9]\d{1,14}$/,
    errorMessage: "Please enter a valid phone number in E.164 format",
    required: true,
    input: {
      type: "text",
      placeholder: "+15551234567"
    },
    parse: function(value) {
      return value.trim().replace(/\s+/g, "");
    }
  },
  extraInstructions: {
    name: "Extra Instructions",
    description: "Additional instructions for the agent",
    validationSchema: /.*/,
    errorMessage: "Extra instructions must be less than 500 characters if provided",
    required: false,
    input: {
      type: "textarea",
      placeholder: "Please be polite and professional.",
      minLength: 0,
      maxLength: 1e3
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {}, "groups": ["Communication", "SMS", "Lead Management"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/get_s_m_s_campaign_messages.ts
var node5 = { "name": "Get SMS Campaign Messages", "id": "get_s_m_s_campaign_messages", "descripition": "Retrieves all messages from a specific SMS campaign by campaign ID", "inputSchema": {
  phone: {
    name: "Phone Number",
    description: "Phone number to retrieve SMS campaign messages for",
    validationSchema: /^\+?[1-9]\d{1,14}$/,
    errorMessage: "Please provide a valid phone number",
    required: true,
    input: {
      type: "text",
      placeholder: "+1234567890"
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {
  messages: {
    name: "",
    description: "",
    example: [],
    validator: function(value) {
      return Array.isArray(value);
    }
  }
}, "groups": ["Communication", "SMS", "Data"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/send_email_notification.ts
var node6 = { "name": "Send Email Notification", "id": "send_email_notification", "descripition": "Sends an email message with customizable from, to, cc, bcc fields and SMTP configuration", "inputSchema": {
  useCustomSMTP: {
    name: "Use Custom SMTP",
    description: "Enable to use custom SMTP settings",
    validationSchema: /^(true|false)$/,
    errorMessage: "Please enter true or false",
    required: false,
    input: {
      type: "boolean"
    },
    parse: function(value) {
      return value === "true";
    }
  },
  from: {
    name: "From",
    description: "Sender email address",
    getVisible: (currentValues) => {
      return currentValues["useCustomSMTP"] == "true";
    },
    validationSchema: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Invalid email format",
    required: false,
    input: {
      type: "text",
      placeholder: "sender@example.com"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  fromName: {
    name: "From Name",
    description: "Sender name",
    validationSchema: /^.+$/,
    errorMessage: "Name cannot be empty",
    required: false,
    input: {
      type: "text",
      placeholder: "John Doe"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  to: {
    name: "To",
    description: "Email recipient address(es)",
    validationSchema: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Invalid email format",
    required: true,
    input: {
      type: "text",
      placeholder: "recipient@example.com"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  cc: {
    name: "CC",
    description: "Carbon copy recipient(s)",
    validationSchema: /^\s*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\s*,\s*[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})*\s*$/,
    errorMessage: "Invalid email format",
    required: false,
    input: {
      type: "text",
      placeholder: "cc@example.com"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  bcc: {
    name: "BCC",
    description: "Blind carbon copy recipient(s)",
    validationSchema: /^\s*([a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})(\s*,\s*[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})*\s*$/,
    errorMessage: "Invalid email format",
    required: false,
    input: {
      type: "text",
      placeholder: "bcc@example.com"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  subject: {
    name: "Subject",
    description: "Email subject line",
    validationSchema: /.+/,
    errorMessage: "Subject cannot be empty",
    required: true,
    input: {
      type: "text",
      placeholder: "Email Subject"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  body: {
    name: "Body",
    description: "Email body content",
    validationSchema: /[\s\S]*/,
    errorMessage: "Email body cannot be empty",
    required: true,
    input: {
      type: "textarea",
      maxLength: 1e4,
      minLength: 1,
      placeholder: "Write your email content here"
    },
    parse: function(value) {
      return value;
    }
  },
  smtpHost: {
    name: "SMTP Host",
    description: "SMTP server hostname (optional)",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid hostname",
    required: false,
    getVisible: (currentValues) => {
      return currentValues["useCustomSMTP"] == "true";
    },
    input: {
      type: "text",
      placeholder: "smtp.example.com"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  smtpPort: {
    name: "SMTP Port",
    description: "SMTP server port (optional)",
    validationSchema: /^\d+$/,
    errorMessage: "Please enter a valid port number",
    required: false,
    getVisible: (currentValues) => {
      return currentValues["useCustomSMTP"] == "true";
    },
    input: {
      type: "number",
      min: 1,
      max: 65535
    },
    parse: function(value) {
      return Number(value);
    }
  },
  smtpUsername: {
    name: "SMTP Username",
    description: "SMTP username for authentication (optional)",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid username",
    required: false,
    getVisible: (currentValues) => {
      return currentValues["useCustomSMTP"] == "true";
    },
    input: {
      type: "text",
      placeholder: "username"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  smtpPassword: {
    name: "SMTP Password",
    description: "SMTP password for authentication (optional)",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid password",
    required: false,
    getVisible: (currentValues) => {
      return currentValues["useCustomSMTP"] == "true";
    },
    input: {
      type: "password"
    },
    parse: function(value) {
      return value;
    }
  },
  smtpSecure: {
    name: "SMTP Secure",
    description: "Use secure connection (TLS) (optional)",
    validationSchema: /^(true|false)$/,
    errorMessage: "Please enter true or false",
    required: false,
    getVisible: (currentValues) => {
      return currentValues["useCustomSMTP"] == "true";
    },
    input: {
      type: "boolean"
    },
    parse: function(value) {
      return value === "true";
    }
  }
}, "outputSchema": {}, "groups": ["Communication", "Email"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/send_s_m_s_notification.ts
var node7 = { "name": "Send SMS Notification", "id": "send_s_m_s_notification", "descripition": "Sends an SMS message to a specified phone number with customizable content", "inputSchema": {
  to: {
    name: "To",
    description: "Phone number to send the SMS to",
    validationSchema: /^\+?[1-9]\d{1,14}$/,
    errorMessage: "Please enter a valid phone number",
    required: true,
    input: {
      type: "text",
      placeholder: "+15551234567"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  body: {
    name: "Message",
    description: "The content of the SMS message",
    validationSchema: /^[\s\S]{1,1600}$/,
    errorMessage: "Please enter a valid message (maximum 1600 characters)",
    required: true,
    input: {
      type: "textarea",
      maxLength: 1600,
      minLength: 1,
      placeholder: "Enter your message here"
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {}, "groups": ["Communication", "SMS"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0.35 };

// src/add_tag_to_lead.ts
var node8 = { "name": "Add Tag To Lead", "id": "add_tag_to_lead", "descripition": "Assigns a specified tag to a lead identified by email or phone number", "inputSchema": {
  email: {
    name: "Email",
    description: "Email address of the lead",
    validationSchema: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Please enter a valid email address",
    required: false,
    input: {
      type: "text",
      placeholder: "john.doe@example.com"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  phone: {
    name: "Phone",
    description: "Phone number of the lead",
    validationSchema: /^\+?[1-9]\d{1,14}$/,
    errorMessage: "Please enter a valid phone number",
    required: false,
    input: {
      type: "text",
      placeholder: "+1234567890"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  tag: {
    name: "Tag",
    description: "Tag to add to the lead",
    validationSchema: /^\S+$/,
    errorMessage: "Please enter a valid tag name",
    required: true,
    input: {
      type: "text",
      placeholder: "lead-tag"
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {}, "groups": ["Lead Management", "Tags"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/remove_tag_from_lead.ts
var node9 = { "name": "Remove Tag From Lead", "id": "remove_tag_from_lead", "descripition": "Removes a specified tag from a lead identified by email or phone number", "inputSchema": {
  email: {
    name: "Email",
    description: "Email address of the lead",
    validationSchema: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Please enter a valid email address",
    required: false,
    input: {
      type: "text",
      placeholder: "john.doe@example.com"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  phone: {
    name: "Phone",
    description: "Phone number of the lead",
    validationSchema: /^\+?[1-9]\d{1,14}$/,
    errorMessage: "Please enter a valid phone number",
    required: false,
    input: {
      type: "text",
      placeholder: "+1234567890"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  tag: {
    name: "Tag",
    description: "Tag to be removed from the lead",
    validationSchema: /^\S+$/,
    errorMessage: "Please enter a valid tag name",
    required: true,
    input: {
      type: "text",
      placeholder: "lead-tag"
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {}, "groups": ["Lead Management", "Tags"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/get_tags.ts
var node10 = { "name": "Get Tags", "id": "get_tags", "descripition": "Retrieves all tags associated with a lead identified by email or phone number", "inputSchema": {
  email: {
    name: "Email",
    description: "Email address of the lead",
    validationSchema: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Please enter a valid email address",
    required: false,
    input: {
      type: "text",
      placeholder: "john.doe@example.com"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  phone: {
    name: "Phone",
    description: "Phone number of the lead",
    validationSchema: /^\+?[1-9]\d{1,14}$/,
    errorMessage: "Please enter a valid phone number",
    required: false,
    input: {
      type: "text",
      placeholder: "+1234567890"
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {
  tags: {
    name: "Tags",
    description: "List of tags associated with the lead",
    example: [],
    validator: function(value) {
      return Array.isArray(value);
    }
  }
}, "groups": ["Data", "Lead Management", "Tags"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/checkcondition.ts
var node11 = { "name": "Check Condition", "id": "checkcondition", "descripition": "Evaluates a condition comparing values with various operators, including AI-powered question answering", "inputSchema": {
  value: {
    name: "Value",
    description: "The value to check against a condition",
    validationSchema: /.*/,
    errorMessage: "Please provide a valid value",
    required: true,
    input: {
      type: "text",
      placeholder: "Value to check"
    },
    parse: function(value) {
      if (value.toLowerCase() === "true") return true;
      if (value.toLowerCase() === "false") return false;
      if (value.startsWith("[") && value.endsWith("]")) {
        try {
          const arr = JSON.parse(value);
          if (Array.isArray(arr)) {
            return arr;
          }
        } catch (e) {
        }
      }
      const numValue = Number(value);
      if (!isNaN(numValue)) {
        return numValue;
      }
      try {
        const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/;
        if (dateRegex.test(value)) {
          return new Date(value);
        }
      } catch (e) {
      }
      return value;
    }
  },
  condition: {
    name: "Condition",
    description: "The type of comparison to perform",
    validationSchema: /.*/,
    errorMessage: "Please select a valid condition",
    required: true,
    input: {
      type: "select",
      options: [
        { label: "Equals", value: "equals" },
        { label: "Not Equals", value: "not_equals" },
        { label: "Greater Than", value: "greater_than" },
        { label: "Less Than", value: "less_than" },
        { label: "Contains", value: "contains" },
        { label: "Not Contains", value: "not_contains" },
        { label: "In", value: "in" },
        { label: "Not In", value: "not_in" },
        { label: "Ask Question AI", value: "ask_question_ai" }
      ]
    },
    parse: function(value) {
      if ([
        "equals",
        "not_equals",
        "greater_than",
        "less_than",
        "contains",
        "not_contains",
        "in",
        "not_in",
        "ask_question_ai"
      ].includes(value)) {
        return value;
      }
      throw new Error("Invalid condition");
    }
  },
  compareTo: {
    name: "Compare To",
    description: "The value to compare against",
    validationSchema: /.*/,
    errorMessage: "Please provide a valid comparison value",
    input: {
      type: "text",
      placeholder: "Value to compare against"
    },
    parse: function(value) {
      if (value.toLowerCase() === "true") return true;
      if (value.toLowerCase() === "false") return false;
      if (value.startsWith("[") && value.endsWith("]")) {
        try {
          const arr = JSON.parse(value);
          if (Array.isArray(arr)) {
            return arr;
          }
        } catch (e) {
        }
      }
      const numValue = Number(value);
      if (!isNaN(numValue)) {
        return numValue;
      }
      try {
        const dateRegex = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?(?:Z|[+-]\d{2}:\d{2})$/;
        if (dateRegex.test(value)) {
          return new Date(value);
        }
      } catch (e) {
      }
      return value;
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Whether the condition was met",
    validator: (value) => typeof value === "boolean",
    example: true
  }
}, "groups": ["Control Flow", "Logic"], "branches": { "match": { "name": "Match", "description": "Condition matched", "id": "match" }, "no_match": { "name": "No Match", "description": "Condition did not match", "id": "no_match" } }, "isTriggerNode": false, "cost": 0 };

// src/custom_webhook.ts
var node12 = { "name": "Custom Webhook", "id": "custom_webhook", "descripition": "Makes custom HTTP requests to external APIs with configurable methods, headers, and body content", "inputSchema": {
  url: {
    name: "URL",
    description: "The URL to send the request to",
    validationSchema: /^https?:\/\/.+/,
    errorMessage: "Please enter a valid URL starting with http:// or https://",
    required: true,
    input: {
      type: "text",
      placeholder: "https://api.example.com/endpoint"
    },
    parse: function(value) {
      const url = new URL(value.trim());
      const privateIpRegex = /^(127\.0\.0\.1|10\.\d{1,3}\.\d{1,3}\.\d{1,3}|172\.(1[6-9]|2\d|3[0-1])\.\d{1,3}\.\d{1,3}|192\.168\.\d{1,3}\.\d{1,3})$/;
      if (url.hostname === "localhost" || privateIpRegex.test(url.hostname)) {
        throw new Error("Localhost and private IPs are not allowed");
      }
      return value.trim();
    }
  },
  method: {
    name: "HTTP Method",
    description: "The HTTP method to use for the request",
    validationSchema: /^(GET|POST|PUT|DELETE|PATCH)$/,
    errorMessage: "Please select a valid HTTP method",
    required: true,
    input: {
      type: "select",
      options: [
        { label: "GET", value: "GET" },
        { label: "POST", value: "POST" },
        { label: "PUT", value: "PUT" },
        { label: "DELETE", value: "DELETE" },
        { label: "PATCH", value: "PATCH" }
      ]
    },
    parse: function(value) {
      return value;
    }
  },
  headers: {
    name: "Headers",
    description: "HTTP headers to include in the request",
    validationSchema: /^.*$/,
    errorMessage: "Invalid headers format",
    required: false,
    input: {
      type: "textarea",
      maxLength: 1e3,
      minLength: 2,
      placeholder: '{"Authorization": "Bearer token", "Content-Type": "application/json"}'
    },
    parse: function(value) {
      try {
        return JSON.parse(value);
      } catch (e) {
        return {};
      }
    }
  },
  body: {
    name: "Request Body",
    description: "The body of the request (for POST, PUT, PATCH)",
    validationSchema: /^.*$/,
    errorMessage: "Invalid request body",
    required: false,
    input: {
      type: "textarea",
      maxLength: 5e3,
      minLength: 0,
      placeholder: '{"key": "value"}'
    },
    parse: function(value) {
      return value;
    }
  },
  contentType: {
    name: "Content-Type",
    description: "The content type of the request body",
    validationSchema: /^[\w\-\/+.]+$/,
    errorMessage: "Please enter a valid content type",
    required: false,
    input: {
      type: "select",
      options: [
        { label: "application/json", value: "application/json" },
        { label: "application/xml", value: "application/xml" },
        { label: "text/plain", value: "text/plain" },
        { label: "text/html", value: "text/html" },
        {
          label: "application/x-www-form-urlencoded",
          value: "application/x-www-form-urlencoded"
        },
        { label: "multipart/form-data", value: "multipart/form-data" }
      ]
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {
  responseStatus: {
    name: "Response Status",
    description: "HTTP status code of the response",
    example: 200,
    validator: function(value) {
      return Number.isInteger(value) && value >= 100 && value < 600;
    }
  },
  responseBody: {
    name: "Response Body",
    description: "Body of the HTTP response",
    example: '{ "success": true }',
    validator: function(value) {
      return typeof value === "string";
    }
  }
}, "groups": ["HTTP", "Integration"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/webhook_trigger.ts
var node13 = { "name": "Webhook", "id": "webhook_trigger", "descripition": "Starts a workflow when data is received from an external webhook, extracting contact information", "inputSchema": {}, "outputSchema": {
  firstName: {
    name: "First Name",
    description: "The first name of the person",
    example: "John",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  lastName: {
    name: "Last Name",
    description: "The last name of the person",
    example: "Doe",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  email: {
    name: "Email",
    description: "Email address of the person",
    example: "john.doe@example.com",
    validator: function(value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return typeof value === "string" && emailRegex.test(value);
    }
  },
  phone: {
    name: "Phone Number",
    description: "Contact phone number",
    example: "+15551234567",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  street_address: {
    name: "Street Address",
    description: "The street address of the person",
    example: "123 Main St",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  apartment_suite: {
    name: "Apartment/Suite",
    description: "The apartment or suite number",
    example: "Apt 4B",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  city: {
    name: "City",
    description: "The city of the person's address",
    example: "New York",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  state: {
    name: "State",
    description: "The state of the person's address",
    example: "NY",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  zip_code: {
    name: "Zip Code",
    description: "The zip code of the person's address",
    example: "10001",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  country: {
    name: "Country",
    description: "The country of the person's address",
    example: "USA",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  website: {
    name: "Website",
    description: "The person's website",
    example: "https://example.com",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  social_links: {
    name: "Social Links",
    description: "Links to the person's social media profiles",
    example: "https://linkedin.com/in/johndoe",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  birth_date: {
    name: "Birth Date",
    description: "The person's birth date",
    example: "1990-01-01",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  gender: {
    name: "Gender",
    description: "The person's gender",
    example: "Male",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  language: {
    name: "Language",
    description: "The person's preferred language",
    example: "English",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  industry: {
    name: "Industry",
    description: "The industry the person works in",
    example: "Technology",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  company_size: {
    name: "Company Size",
    description: "The size of the person's company",
    example: "51-200 employees",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  annual_revenue: {
    name: "Annual Revenue",
    description: "The annual revenue of the person's company",
    example: "$10M - $50M",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  department: {
    name: "Department",
    description: "The department the person works in",
    example: "Marketing",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  otherFields: {
    name: "Additional Information",
    description: "Any other information provided by the webhook",
    example: { company: "Acme Inc", role: "Manager" },
    validator: function(value) {
      return typeof value === "object" && value !== null;
    }
  }
}, "groups": ["Triggers", "Integration"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/inbound_call_trigger.ts
var node14 = { "name": "Inbound Call Trigger", "id": "inbound_call_trigger", "descripition": "Triggers a workflow when an inbound call is received, providing caller details and call transcription", "inputSchema": {}, "outputSchema": {
  phone: {
    name: "Phone Number",
    description: "The phone number of the inbound caller",
    example: "+14155552671",
    validator: function(value) {
      return /^\+[0-9]{10,15}$/.test(value);
    }
  },
  transcription: {
    name: "Call Transcription",
    description: "The transcribed text from the inbound call",
    example: "Hello, I'm calling about your services.",
    validator: function(value) {
      return value.trim().length > 0 && value.length <= 1e4;
    }
  },
  recordingUrl: {
    name: "Recording URL",
    description: "URL to access the call recording",
    example: "https://example.com/recordings/call12345.mp3",
    validator: function(value) {
      return /^https?:\/\/[^\s$.?#].[^\s]*$/.test(value);
    }
  }
}, "groups": ["Triggers", "Communication", "Phone"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/get_uploaded_leads_trigger.ts
var node15 = { "name": "Get Uploaded Leads Trigger", "id": "get_uploaded_leads_trigger", "descripition": "Triggers a workflow when new leads are uploaded, with options for scheduling and limiting the number of leads", "inputSchema": {
  numLeadsToFetch: {
    name: "Number of Leads to Fetch",
    description: "The maximum number of leads to fetch at once",
    validationSchema: /^[1-9][0-9]*$/,
    errorMessage: "Must be a positive integer",
    required: true,
    input: {
      type: "number",
      min: 1,
      max: 1e3
    },
    parse: function(value) {
      return parseInt(value, 10);
    }
  },
  startHour: {
    name: "Start Hour",
    description: "The hour to start fetching leads (0-23)",
    validationSchema: /^([0-9]|1[0-9]|2[0-3])$/,
    errorMessage: "Must be a number between 0 and 23",
    required: true,
    input: {
      type: "number",
      min: 0,
      max: 23
    },
    parse: function(value) {
      return parseInt(value, 10);
    }
  },
  endHour: {
    name: "End Hour",
    description: "The hour to stop fetching leads (0-23)",
    validationSchema: /^([0-9]|1[0-9]|2[0-3])$/,
    errorMessage: "Must be a number between 0 and 23",
    required: true,
    input: {
      type: "number",
      min: 0,
      max: 23
    },
    parse: function(value) {
      return parseInt(value, 10);
    }
  },
  daysOfWeek: {
    name: "Days of Week",
    description: "Days to fetch leads (0=Sunday to 6=Saturday)",
    validationSchema: /^([0-6](,[0-6])*)$/,
    errorMessage: "Must be comma-separated values between 0 and 6",
    required: true,
    input: {
      type: "multiselect",
      options: [
        { label: "Sunday", value: "0" },
        { label: "Monday", value: "1" },
        { label: "Tuesday", value: "2" },
        { label: "Wednesday", value: "3" },
        { label: "Thursday", value: "4" },
        { label: "Friday", value: "5" },
        { label: "Saturday", value: "6" }
      ]
    },
    parse: function(value) {
      return value.split(",").map((v) => parseInt(v.trim(), 10));
    }
  }
}, "outputSchema": {
  firstName: {
    name: "First Name",
    description: "The first name of the person",
    example: "John",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  lastName: {
    name: "Last Name",
    description: "The last name of the person",
    example: "Doe",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  email: {
    name: "Email",
    description: "Email address of the person",
    example: "john.doe@example.com",
    validator: function(value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return typeof value === "string" && emailRegex.test(value);
    }
  },
  phone: {
    name: "Phone Number",
    description: "Contact phone number",
    example: "+15551234567",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  street_address: {
    name: "Street Address",
    description: "The street address of the person",
    example: "123 Main St",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  apartment_suite: {
    name: "Apartment/Suite",
    description: "The apartment or suite number",
    example: "Apt 4B",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  city: {
    name: "City",
    description: "The city of the person's address",
    example: "New York",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  state: {
    name: "State",
    description: "The state of the person's address",
    example: "NY",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  zip_code: {
    name: "Zip Code",
    description: "The zip code of the person's address",
    example: "10001",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  country: {
    name: "Country",
    description: "The country of the person's address",
    example: "USA",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  website: {
    name: "Website",
    description: "The person's website",
    example: "https://example.com",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  social_links: {
    name: "Social Links",
    description: "Links to the person's social media profiles",
    example: "https://linkedin.com/in/johndoe",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  birth_date: {
    name: "Birth Date",
    description: "The person's birth date",
    example: "1990-01-01",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  gender: {
    name: "Gender",
    description: "The person's gender",
    example: "Male",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  language: {
    name: "Language",
    description: "The person's preferred language",
    example: "English",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  industry: {
    name: "Industry",
    description: "The industry the person works in",
    example: "Technology",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  company_size: {
    name: "Company Size",
    description: "The size of the person's company",
    example: "51-200 employees",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  annual_revenue: {
    name: "Annual Revenue",
    description: "The annual revenue of the person's company",
    example: "$10M - $50M",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  department: {
    name: "Department",
    description: "The department the person works in",
    example: "Marketing",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  otherFields: {
    name: "Additional Information",
    description: "Any other information provided by the webhook",
    example: { company: "Acme Inc", role: "Manager" },
    validator: function(value) {
      return typeof value === "object" && value !== null;
    }
  }
}, "groups": ["Triggers", "Data", "Lead Management"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_tag_added.ts
var node16 = { "name": "On Tag Added", "id": "on_tag_added", "descripition": "Triggers a workflow when a tag is added to a lead, providing lead information", "inputSchema": {}, "outputSchema": {
  tag: {
    name: "Tag",
    description: "The tag that was added to the lead",
    example: "VIP Customer",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  firstName: {
    name: "First Name",
    description: "The first name of the person",
    example: "John",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  lastName: {
    name: "Last Name",
    description: "The last name of the person",
    example: "Doe",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  email: {
    name: "Email",
    description: "Email address of the person",
    example: "john.doe@example.com",
    validator: function(value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return typeof value === "string" && emailRegex.test(value);
    }
  },
  phone: {
    name: "Phone Number",
    description: "Contact phone number",
    example: "+15551234567",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  street_address: {
    name: "Street Address",
    description: "The street address of the person",
    example: "123 Main St",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  apartment_suite: {
    name: "Apartment/Suite",
    description: "The apartment or suite number",
    example: "Apt 4B",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  city: {
    name: "City",
    description: "The city of the person's address",
    example: "New York",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  state: {
    name: "State",
    description: "The state of the person's address",
    example: "NY",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  zip_code: {
    name: "Zip Code",
    description: "The zip code of the person's address",
    example: "10001",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  country: {
    name: "Country",
    description: "The country of the person's address",
    example: "USA",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  website: {
    name: "Website",
    description: "The person's website",
    example: "https://example.com",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  social_links: {
    name: "Social Links",
    description: "Links to the person's social media profiles",
    example: "https://linkedin.com/in/johndoe",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  birth_date: {
    name: "Birth Date",
    description: "The person's birth date",
    example: "1990-01-01",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  gender: {
    name: "Gender",
    description: "The person's gender",
    example: "Male",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  language: {
    name: "Language",
    description: "The person's preferred language",
    example: "English",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  industry: {
    name: "Industry",
    description: "The industry the person works in",
    example: "Technology",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  company_size: {
    name: "Company Size",
    description: "The size of the person's company",
    example: "51-200 employees",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  annual_revenue: {
    name: "Annual Revenue",
    description: "The annual revenue of the person's company",
    example: "$10M - $50M",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  department: {
    name: "Department",
    description: "The department the person works in",
    example: "Marketing",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  otherFields: {
    name: "Additional Information",
    description: "Any other information provided by the webhook",
    example: { company: "Acme Inc", role: "Manager" },
    validator: function(value) {
      return typeof value === "object" && value !== null;
    }
  }
}, "groups": ["Triggers", "Lead Management", "Tags"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/run_once_trigger.ts
var node17 = { "name": "Run Once", "id": "run_once_trigger", "descripition": "A trigger node that runs only once when the workflow is activated", "inputSchema": {}, "outputSchema": {}, "groups": ["Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/split_for_test.ts
var node18 = { "name": "Split For Test", "id": "split_for_test", "descripition": "Split workflow execution between testA and testB branches based on a ratio", "inputSchema": {
  splitRatio: {
    description: "Ratio to split between testA and testB (0-1, represents fraction going to testA)",
    required: true,
    name: "",
    validationSchema: /^0(\.\d+)?$|^1(\.0+)?$/,
    errorMessage: "",
    input: {
      type: "number",
      min: 0,
      max: 1,
      step: 0.01,
      default: 0.5
    },
    parse: function(value) {
      throw new Error("Function not implemented.");
    }
  }
}, "outputSchema": {
  splitResult: {
    name: "Split Result",
    description: "Result of the split",
    example: "test_a",
    validator: function(value) {
      return ["test_a", "test_b"].includes(value);
    }
  }
}, "groups": ["Control Flow"], "branches": { "test_a": { "id": "test_a", "name": "TestA", "description": "First branch of the split" }, "test_b": { "id": "test_b", "name": "TestB", "description": "Second branch of the split" } }, "isTriggerNode": false, "cost": 0 };

// src/store_variable.ts
var node19 = { "name": "Store Variable", "id": "store_variable", "descripition": "Stores a variable for later use", "inputSchema": {
  uniqueKey: {
    name: "Unique Key",
    description: "A unique key to identify the variable across different workflow runs. For example, if you use {{phone number}} variable of a lead as the unique key, the variable will be unique per phone number.",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid unique key",
    required: true,
    input: {
      type: "text",
      placeholder: "myUniqueKey"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  variableName: {
    name: "Variable Name",
    description: "The name of the variable to get",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid variable name",
    required: true,
    input: {
      type: "text",
      placeholder: "myVariable"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  variableValue: {
    name: "Value",
    description: "The value to store in the variable",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid value",
    required: true,
    input: {
      type: "text",
      placeholder: "myValue"
    },
    parse: function(value) {
      return value;
    }
  }
}, "outputSchema": {}, "groups": ["Variables", "Control Flow"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/get_variable.ts
var node20 = { "name": "Get Variable", "id": "get_variable", "descripition": "Gets the value of a stored variable", "inputSchema": {
  uniqueKey: {
    name: "Unique Key",
    description: "A unique key to identify the variable across different workflow runs. For example, if you use {{phone number}} variable of a lead as the unique key, the variable will be unique per phone number.",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid unique key",
    required: true,
    input: {
      type: "text",
      placeholder: "myUniqueKey"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  variableName: {
    name: "Variable Name",
    description: "The name of the variable to get",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid variable name",
    required: true,
    input: {
      type: "text",
      placeholder: "myVariable"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  defaultValue: {
    name: "Default Value",
    description: "Default value if the variable doesn't exist",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid default value",
    required: false,
    input: {
      type: "text",
      placeholder: "defaultValue"
    },
    parse: function(value) {
      return value;
    }
  }
}, "outputSchema": {
  variableValue: {
    name: "Variable Value",
    description: "The value of the variable",
    example: "Some value",
    validator: (value) => typeof value === "string"
  }
}, "groups": ["Variables", "Control Flow"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/on_website_vistor_indentified.ts
var node21 = { "name": "On Website Visitor Identified", "id": "on_website_vistor_indentified", "descripition": "Triggers when an anonymous Website visitor is identified via our Pixel Tag", "inputSchema": {}, "outputSchema": {
  firstName: {
    name: "First Name",
    description: "The first name of the person",
    example: "John",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  lastName: {
    name: "Last Name",
    description: "The last name of the person",
    example: "Doe",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  email: {
    name: "Email",
    description: "Email address of the person",
    example: "john.doe@example.com",
    validator: function(value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return typeof value === "string" && emailRegex.test(value);
    }
  },
  phone: {
    name: "Phone Number",
    description: "Contact phone number",
    example: "+15551234567",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  street_address: {
    name: "Street Address",
    description: "The street address of the person",
    example: "123 Main St",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  apartment_suite: {
    name: "Apartment/Suite",
    description: "The apartment or suite number",
    example: "Apt 4B",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  city: {
    name: "City",
    description: "The city of the person's address",
    example: "New York",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  state: {
    name: "State",
    description: "The state of the person's address",
    example: "NY",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  zip_code: {
    name: "Zip Code",
    description: "The zip code of the person's address",
    example: "10001",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  country: {
    name: "Country",
    description: "The country of the person's address",
    example: "USA",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  website: {
    name: "Website",
    description: "The person's website",
    example: "https://example.com",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  social_links: {
    name: "Social Links",
    description: "Links to the person's social media profiles",
    example: "https://linkedin.com/in/johndoe",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  birth_date: {
    name: "Birth Date",
    description: "The person's birth date",
    example: "1990-01-01",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  gender: {
    name: "Gender",
    description: "The person's gender",
    example: "Male",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  language: {
    name: "Language",
    description: "The person's preferred language",
    example: "English",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  industry: {
    name: "Industry",
    description: "The industry the person works in",
    example: "Technology",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  company_size: {
    name: "Company Size",
    description: "The size of the person's company",
    example: "51-200 employees",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  annual_revenue: {
    name: "Annual Revenue",
    description: "The annual revenue of the person's company",
    example: "$10M - $50M",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  department: {
    name: "Department",
    description: "The department the person works in",
    example: "Marketing",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  otherFields: {
    name: "Additional Information",
    description: "Any other information provided by the webhook",
    example: { company: "Acme Inc", role: "Manager" },
    validator: function(value) {
      return typeof value === "object" && value !== null;
    }
  }
}, "groups": ["Trigger", "Website"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_new_lead_service_titan.ts
var node22 = { "name": "ServiceTitan New Lead", "id": "on_new_lead_service_titan", "descripition": "Triggers when a new lead is created in ServiceTitan", "inputSchema": {}, "outputSchema": {
  id: {
    name: "ID",
    description: "The ID of the lead",
    example: 123,
    validator: (value) => typeof value === "number"
  },
  status: {
    name: "Status",
    description: "The status of the lead",
    example: "New",
    validator: (value) => typeof value === "string"
  },
  priority: {
    name: "Priority",
    description: "The priority of the lead",
    example: "High",
    validator: (value) => typeof value === "string"
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the customer associated with the lead",
    example: 456,
    validator: (value) => typeof value === "number" || value === null
  },
  locationId: {
    name: "Location ID",
    description: "The ID of the location associated with the lead",
    example: 789,
    validator: (value) => typeof value === "number" || value === null
  },
  businessUnitId: {
    name: "Business Unit ID",
    description: "The ID of the business unit associated with the lead",
    example: 101,
    validator: (value) => typeof value === "number" || value === null
  },
  jobTypeId: {
    name: "Job Type ID",
    description: "The ID of the job type associated with the lead",
    example: 202,
    validator: (value) => typeof value === "number" || value === null
  },
  campaignId: {
    name: "Campaign ID",
    description: "The ID of the campaign associated with the lead",
    example: 303,
    validator: (value) => typeof value === "number"
  },
  followUpDate: {
    name: "Follow Up Date",
    description: "The follow-up date for the lead",
    example: "2023-10-01T10:00:00Z",
    validator: (value) => typeof value === "string" || value === null
  },
  createdById: {
    name: "Created By ID",
    description: "The ID of the user who created the lead",
    example: 404,
    validator: (value) => typeof value === "number"
  },
  createdOn: {
    name: "Created On",
    description: "The date and time when the lead was created",
    example: "2023-10-01T09:00:00Z",
    validator: (value) => typeof value === "string"
  },
  modifiedOn: {
    name: "Modified On",
    description: "The date and time when the lead was last modified",
    example: "2023-10-01T09:30:00Z",
    validator: (value) => typeof value === "string"
  },
  tagTypeIds: {
    name: "Tag Type IDs",
    description: "The tag type IDs associated with the lead",
    example: [1, 2, 3],
    validator: (value) => Array.isArray(value) && value.every((item) => typeof item === "number") || value === null
  },
  dismissingReasonId: {
    name: "Dismissing Reason ID",
    description: "The ID of the reason for dismissing the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  summary: {
    name: "Summary",
    description: "A brief summary of the lead",
    example: "Customer interested in HVAC services.",
    validator: (value) => typeof value === "string" || value === null
  },
  callReasonId: {
    name: "Call Reason ID",
    description: "The ID of the reason for the call associated with the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  callId: {
    name: "Call ID",
    description: "The ID of the call associated with the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  bookingId: {
    name: "Booking ID",
    description: "The ID of the booking associated with the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  manualCallId: {
    name: "Manual Call ID",
    description: "The ID of the manual call associated with the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  leadUrl: {
    name: "Lead URL",
    description: "The URL of the lead in ServiceTitan",
    example: "https://app.servicetitan.com/leads/123",
    validator: (value) => typeof value === "string" || value === null
  },
  leadCustomerName: {
    name: "Lead Customer Name",
    description: "The name of the customer associated with the lead",
    example: "Jane Smith",
    validator: (value) => typeof value === "string" || value === null
  },
  leadPhone: {
    name: "Lead Phone",
    description: "The phone number of the lead",
    example: "555-123-4567",
    validator: (value) => typeof value === "string" || value === null
  },
  leadEmail: {
    name: "Lead Email",
    description: "The email address of the lead",
    example: "johndoe@email.com",
    validator: (value) => typeof value === "string" || value === null
  },
  leadStreet: {
    name: "Lead Street",
    description: "The street address of the lead",
    example: "123 Main St",
    validator: (value) => typeof value === "string" || value === null
  },
  leadUnit: {
    name: "Lead Unit",
    description: "The unit or apartment number of the lead",
    example: "Apt 4B",
    validator: (value) => typeof value === "string" || value === null
  },
  leadCity: {
    name: "Lead City",
    description: "The city of the lead",
    example: "Springfield",
    validator: (value) => typeof value === "string" || value === null
  },
  leadState: {
    name: "Lead State",
    description: "The state of the lead",
    example: "IL",
    validator: (value) => typeof value === "string" || value === null
  },
  leadZip: {
    name: "Lead ZIP Code",
    description: "The ZIP code of the lead",
    example: "62704",
    validator: (value) => typeof value === "string" || value === null
  },
  leadCountry: {
    name: "Lead Country",
    description: "The country of the lead",
    example: "USA",
    validator: (value) => typeof value === "string" || value === null
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_new_job_service_titan.ts
var node23 = { "name": "ServiceTitan New Job", "id": "on_new_job_service_titan", "descripition": "Triggers when a new job is created in ServiceTitan", "inputSchema": {}, "outputSchema": {
  id: {
    name: "ID",
    description: "The job ID",
    example: 12345,
    validator: (value) => typeof value === "number"
  },
  jobNumber: {
    name: "Job Number",
    description: "The job number",
    example: "J-1001",
    validator: (value) => typeof value === "string"
  },
  projectId: {
    name: "Project ID",
    description: "The associated project ID, if any",
    example: 67890,
    validator: (value) => typeof value === "number" || value === null
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the customer associated with the job",
    example: 54321,
    validator: (value) => typeof value === "number"
  },
  locationId: {
    name: "Location ID",
    description: "The ID of the location associated with the job",
    example: 98765,
    validator: (value) => typeof value === "number"
  },
  jobStatus: {
    name: "Job Status",
    description: "The current status of the job",
    example: "Completed",
    validator: (value) => typeof value === "string"
  },
  completedOn: {
    name: "Completed On",
    description: "The date and time when the job was completed, if applicable",
    example: "2023-10-01T15:30:00Z",
    validator: (value) => typeof value === "string" || value === null
  },
  businessUnitId: {
    name: "Business Unit ID",
    description: "The ID of the business unit associated with the job",
    example: 11223,
    validator: (value) => typeof value === "number"
  },
  jobTypeId: {
    name: "Job Type ID",
    description: "The ID of the job type",
    example: 33445,
    validator: (value) => typeof value === "number"
  },
  priority: {
    name: "Priority",
    description: "The priority level of the job",
    example: "High",
    validator: (value) => typeof value === "string"
  },
  campaignId: {
    name: "Campaign ID",
    description: "The ID of the campaign associated with the job",
    example: 55667,
    validator: (value) => typeof value === "number"
  },
  appointmentCount: {
    name: "Appointment Count",
    description: "The number of appointments associated with the job",
    example: 2,
    validator: (value) => typeof value === "number"
  },
  firstAppointmentId: {
    name: "First Appointment ID",
    description: "The ID of the first appointment associated with the job",
    example: 77889,
    validator: (value) => typeof value === "number"
  },
  lastAppointmentId: {
    name: "Last Appointment ID",
    description: "The ID of the last appointment associated with the job",
    example: 99001,
    validator: (value) => typeof value === "number"
  },
  recallForId: {
    name: "Recall For ID",
    description: "The ID of the job this job is a recall for, if applicable",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  warrantyId: {
    name: "Warranty ID",
    description: "The ID of the warranty associated with the job, if any",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  jobGeneratedLeadSource: {
    name: "Job Generated Lead Source",
    description: "Details about the lead source that generated the job, if applicable",
    example: null,
    validator: (value) => typeof value === "object" || value === null
  },
  noCharge: {
    name: "No Charge",
    description: "Indicates if the job is marked as no charge",
    example: false,
    validator: (value) => typeof value === "boolean"
  },
  notificationsEnabled: {
    name: "Notifications Enabled",
    description: "Indicates if notifications are enabled for the job",
    example: true,
    validator: (value) => typeof value === "boolean"
  },
  createdOn: {
    name: "Created On",
    description: "The creation timestamp of the job record",
    example: "2023-10-01T12:00:00Z",
    validator: (value) => typeof value === "string"
  },
  createdById: {
    name: "Created By ID",
    description: "The ID of the user who created the job record",
    example: 22334,
    validator: (value) => typeof value === "number"
  },
  modifiedOn: {
    name: "Modified On",
    description: "The last modification timestamp of the job record",
    example: "2023-10-05T15:30:00Z",
    validator: (value) => typeof value === "string"
  },
  tagTypeIds: {
    name: "Tag Type IDs",
    description: "List of tag type IDs associated with the job",
    example: [1, 2, 3],
    validator: (value) => Array.isArray(value) && value.every((item) => typeof item === "number")
  },
  leadCallId: {
    name: "Lead Call ID",
    description: "The ID of the lead call associated with the job, if any",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  partnerLeadCallId: {
    name: "Partner Lead Call ID",
    description: "The ID of the partner lead call associated with the job, if any",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  bookingId: {
    name: "Booking ID",
    description: "The ID of the booking associated with the job, if any",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  soldById: {
    name: "Sold By ID",
    description: "The ID of the user who sold the job, if applicable",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  customerPo: {
    name: "Customer PO",
    description: "The customer purchase order associated with the job, if any",
    example: "PO-12345",
    validator: (value) => typeof value === "string" || value === null
  },
  invoiceId: {
    name: "Invoice ID",
    description: "The ID of the invoice associated with the job",
    example: 44556,
    validator: (value) => typeof value === "number"
  },
  membershipId: {
    name: "Membership ID",
    description: "The ID of the membership associated with the job, if any",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  total: {
    name: "Total",
    description: "The total amount for the job, if available",
    example: 250.75,
    validator: (value) => typeof value === "number" || value === null
  },
  summary: {
    name: "Summary",
    description: "A brief summary of the job",
    example: "AC repair and maintenance",
    validator: (value) => typeof value === "string" || value === null
  },
  customFields: {
    name: "Custom Fields",
    description: "Custom fields associated with the job",
    example: [{ fieldId: 1, value: "Custom Value" }],
    validator: (value) => Array.isArray(value) && value.every(
      (item) => typeof item.fieldId === "number" && (typeof item.value === "string" || item.value === null || item.value === void 0)
    )
  },
  externalData: {
    name: "External Data",
    description: "External data associated with the job",
    example: [{ source: "API", data: "Some external data" }],
    validator: (value) => Array.isArray(value) && value.every(
      (item) => typeof item.source === "string" && (typeof item.data === "string" || item.data === null || item.data === void 0)
    )
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_new_invoice_service_titan.ts
var node24 = { "name": "ServiceTitan New Invoice", "id": "on_new_invoice_service_titan", "descripition": "Triggers when a new invoice is created in ServiceTitan", "inputSchema": {}, "outputSchema": {
  id: {
    name: "ID",
    description: "The unique identifier for the invoice",
    example: 12345,
    validator: (value) => typeof value === "number"
  },
  syncStatus: {
    name: "Sync Status",
    description: "The sync status of the invoice",
    example: "Synced",
    validator: (value) => typeof value === "string" || value === null
  },
  referenceNumber: {
    name: "Reference Number",
    description: "The reference number of the invoice",
    example: "INV-1001",
    validator: (value) => typeof value === "string" || value === null
  },
  invoiceDate: {
    name: "Invoice Date",
    description: "The date the invoice was created",
    example: "2023-10-01",
    validator: (value) => typeof value === "string" || value === null
  },
  dueDate: {
    name: "Due Date",
    description: "The due date for the invoice",
    example: "2023-10-15",
    validator: (value) => typeof value === "string" || value === null
  },
  total: {
    name: "Total",
    description: "The total amount of the invoice",
    example: "150.00",
    validator: (value) => typeof value === "string" || value === null
  },
  balance: {
    name: "Balance",
    description: "The remaining balance of the invoice",
    example: "50.00",
    validator: (value) => typeof value === "string" || value === null
  },
  invoiceTypeId: {
    name: "Invoice Type ID",
    description: "The type ID of the invoice",
    example: 1,
    validator: (value) => typeof value === "number" || value === null
  },
  invoiceTypeName: {
    name: "Invoice Type Name",
    description: "The type name of the invoice",
    example: "Standard",
    validator: (value) => typeof value === "string" || value === null
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the customer associated with the invoice",
    example: 67890,
    validator: (value) => typeof value === "number" || value === null
  },
  customerName: {
    name: "Customer Name",
    description: "The name of the customer associated with the invoice",
    example: "John Doe",
    validator: (value) => typeof value === "string" || value === null
  },
  customerAddressStreet: {
    name: "Customer Address Street",
    description: "The street address of the customer",
    example: "123 Main St",
    validator: (value) => typeof value === "string" || value === null
  },
  customerAddressUnit: {
    name: "Customer Address Unit",
    description: "The unit or apartment number of the customer's address",
    example: "Apt 4B",
    validator: (value) => typeof value === "string" || value === null
  },
  customerAddressCity: {
    name: "Customer Address City",
    description: "The city of the customer's address",
    example: "Springfield",
    validator: (value) => typeof value === "string" || value === null
  },
  customerAddressState: {
    name: "Customer Address State",
    description: "The state of the customer's address",
    example: "IL",
    validator: (value) => typeof value === "string" || value === null
  },
  customerAddressZip: {
    name: "Customer Address ZIP Code",
    description: "The ZIP code of the customer's address",
    example: "62704",
    validator: (value) => typeof value === "string" || value === null
  },
  customerAddressCountry: {
    name: "Customer Address Country",
    description: "The country of the customer's address",
    example: "USA",
    validator: (value) => typeof value === "string" || value === null
  },
  paidOn: {
    name: "Paid On",
    description: "The date the invoice was paid",
    example: "2023-10-10",
    validator: (value) => typeof value === "string" || value === null
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_new_estimate_service_titan.ts
var node25 = { "name": "ServiceTitan New Estimate", "id": "on_new_estimate_service_titan", "descripition": "Triggers when a new estimate is created in ServiceTitan", "inputSchema": {}, "outputSchema": {
  id: {
    name: "ID",
    description: "The unique identifier for the estimate",
    example: 12345,
    validator: (value) => typeof value === "number"
  },
  jobId: {
    name: "Job ID",
    description: "The ID of the job associated with the estimate, if any",
    example: 67890,
    validator: (value) => typeof value === "number" || value === null
  },
  projectId: {
    name: "Project ID",
    description: "The ID of the project associated with the estimate, if any",
    example: 54321,
    validator: (value) => typeof value === "number" || value === null
  },
  locationId: {
    name: "Location ID",
    description: "The ID of the location associated with the estimate, if any",
    example: 98765,
    validator: (value) => typeof value === "number" || value === null
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the customer associated with the estimate, if any",
    example: 11223,
    validator: (value) => typeof value === "number" || value === null
  },
  name: {
    name: "Name",
    description: "The name of the estimate",
    example: "Estimate for AC Repair",
    validator: (value) => typeof value === "string" || value === null
  },
  jobNumber: {
    name: "Job Number",
    description: "The job number associated with the estimate, if any",
    example: "JOB-001",
    validator: (value) => typeof value === "string" || value === null
  },
  status: {
    name: "Status",
    description: "The status of the estimate",
    example: { value: 1, name: "Draft" },
    validator: (value) => typeof value === "object" || value === null
  },
  reviewStatus: {
    name: "Review Status",
    description: "The review status of the estimate",
    example: "NeedsApproval",
    validator: (value) => ["None", "NeedsApproval", "Approved", "NotApproved"].includes(value) || value === null
  },
  summary: {
    name: "Summary",
    description: "A brief summary of the estimate",
    example: "This estimate covers the cost of AC repair.",
    validator: (value) => typeof value === "string" || value === null
  },
  createdOn: {
    name: "Created On",
    description: "The date and time when the estimate was created",
    example: "2023-10-05T14:48:00.000Z",
    validator: (value) => true
  },
  modifiedOn: {
    name: "Modified On",
    description: "The date and time when the estimate was last modified",
    example: "2023-10-06T10:15:00.000Z",
    validator: (value) => true
  },
  soldOn: {
    name: "Sold On",
    description: "The date and time when the estimate was sold, if applicable",
    example: "2023-10-07T09:00:00.000Z",
    validator: (value) => typeof value === "string" || value === null
  },
  soldBy: {
    name: "Sold By",
    description: "The ID of the user who sold the estimate, if applicable",
    example: 33445,
    validator: (value) => typeof value === "number" || value === null
  },
  active: {
    name: "Active",
    description: "Indicates whether the estimate is active or has been archived",
    example: true,
    validator: (value) => typeof value === "boolean"
  },
  subtotal: {
    name: "Subtotal",
    description: "The subtotal amount of the estimate",
    example: 1500.75,
    validator: (value) => typeof value === "number"
  },
  tax: {
    name: "Tax",
    description: "The tax amount applied to the estimate",
    example: 120.06,
    validator: (value) => typeof value === "number"
  },
  businessUnitId: {
    name: "Business Unit ID",
    description: "The ID of the business unit associated with the estimate, if any",
    example: 55667,
    validator: (value) => typeof value === "number" || value === null
  },
  businessUnitName: {
    name: "Business Unit Name",
    description: "The name of the business unit associated with the estimate, if any",
    example: "HVAC Services",
    validator: (value) => typeof value === "string" || value === null
  },
  isRecommended: {
    name: "Is Recommended",
    description: "Indicates whether the estimate is a recommended option",
    example: false,
    validator: (value) => typeof value === "boolean"
  },
  budgetCodeId: {
    name: "Budget Code ID",
    description: "The ID of the budget code associated with the estimate, if any",
    example: 77889,
    validator: (value) => typeof value === "number" || value === null
  },
  isChangeOrder: {
    name: "Is Change Order",
    description: "Indicates whether the estimate is a change order to an existing job or project",
    example: false,
    validator: (value) => typeof value === "boolean"
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_new_customer_service_titan.ts
var node26 = { "name": "ServiceTitan New Customer", "id": "on_new_customer_service_titan", "descripition": "Triggers when a new customer is created in ServiceTitan", "inputSchema": {}, "outputSchema": {
  id: {
    name: "ID",
    description: "The unique identifier for the customer",
    example: 12345,
    validator: (value) => typeof value === "number"
  },
  active: {
    name: "Active",
    description: "Indicates if the customer is active",
    example: true,
    validator: (value) => typeof value === "boolean"
  },
  name: {
    name: "Name",
    description: "The full name of the customer",
    example: "John Doe",
    validator: (value) => typeof value === "string"
  },
  type: {
    name: "Type",
    description: "The type of customer (e.g., Residential, Commercial)",
    example: "Residential",
    validator: (value) => typeof value === "string"
  },
  streetAddress: {
    name: "Street Address",
    description: "The street address of the customer",
    example: "123 Main St",
    validator: (value) => typeof value === "string"
  },
  unit: {
    name: "Unit",
    description: "The unit or apartment number of the customer",
    example: "Apt 4B",
    validator: (value) => typeof value === "string" || value === null || value === void 0
  },
  city: {
    name: "City",
    description: "The city of the customer's address",
    example: "Springfield",
    validator: (value) => typeof value === "string"
  },
  state: {
    name: "State",
    description: "The state of the customer's address",
    example: "IL",
    validator: (value) => typeof value === "string"
  },
  zip: {
    name: "ZIP Code",
    description: "The ZIP code of the customer's address",
    example: "62704",
    validator: (value) => typeof value === "string"
  },
  country: {
    name: "Country",
    description: "The country of the customer's address",
    example: "USA",
    validator: (value) => typeof value === "string"
  },
  latitude: {
    name: "Latitude",
    description: "The latitude of the customer's location",
    example: 39.7817,
    validator: (value) => typeof value === "number" || value === null || value === void 0
  },
  longitude: {
    name: "Longitude",
    description: "The longitude of the customer's location",
    example: -89.6501,
    validator: (value) => typeof value === "number" || value === null || value === void 0
  },
  customFields: {
    name: "Custom Fields",
    description: "Custom fields associated with the customer",
    example: [
      { typeId: 1, name: "Preferred Contact Method", value: "Email" }
    ],
    validator: (value) => Array.isArray(value) && value.every(
      (item) => typeof item.typeId === "number" && (typeof item.name === "string" || item.name === null || item.name === void 0) && (typeof item.value === "string" || item.value === null || item.value === void 0)
    )
  },
  balance: {
    name: "Balance",
    description: "The current balance of the customer account",
    example: 150.75,
    validator: (value) => typeof value === "number"
  },
  taxExempt: {
    name: "Tax Exempt",
    description: "Indicates if the customer is tax exempt",
    example: false,
    validator: (value) => typeof value === "boolean"
  },
  tagTypeIds: {
    name: "Tag Type IDs",
    description: "List of tag type IDs associated with the customer",
    example: [1, 2, 3],
    validator: (value) => Array.isArray(value) && value.every((item) => typeof item === "number")
  },
  doNotMail: {
    name: "Do Not Mail",
    description: "Indicates if the customer has opted out of mailings",
    example: true,
    validator: (value) => typeof value === "boolean"
  },
  doNotService: {
    name: "Do Not Service",
    description: "Indicates if the customer should not be serviced",
    example: false,
    validator: (value) => typeof value === "boolean"
  },
  createdOn: {
    name: "Created On",
    description: "The creation timestamp of the customer record",
    example: "2023-10-01T12:00:00Z",
    validator: (value) => typeof value === "string"
  },
  createdById: {
    name: "Created By ID",
    description: "The ID of the user who created the customer record",
    example: 67890,
    validator: (value) => typeof value === "number"
  },
  modifiedOn: {
    name: "Modified On",
    description: "The last modification timestamp of the customer record",
    example: "2023-10-05T15:30:00Z",
    validator: (value) => typeof value === "string"
  },
  mergedToId: {
    name: "Merged To ID",
    description: "The ID of the customer record this one was merged into, if applicable",
    example: null,
    validator: (value) => typeof value === "number" || value === null || value === void 0
  },
  externalData: {
    name: "External Data",
    description: "External data key-value pairs associated with the customer",
    example: [{ key: "CRM_ID", value: "C12345" }],
    validator: (value) => Array.isArray(value) && value.every(
      (item) => typeof item.key === "string" && typeof item.value === "string"
    )
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_new_appoinment_service_titan.ts
var node27 = { "name": "ServiceTitan New Appoinment", "id": "on_new_appoinment_service_titan", "descripition": "Triggers when a new appointment is created in ServiceTitan", "inputSchema": {}, "outputSchema": {
  id: {
    name: "ID",
    description: "The appointment ID",
    example: 12345,
    validator: (value) => typeof value === "number"
  },
  jobId: {
    name: "Job ID",
    description: "The associated job ID",
    example: 67890,
    validator: (value) => typeof value === "number"
  },
  appointmentNumber: {
    name: "Appointment Number",
    description: "The appointment number",
    example: "APT-001",
    validator: (value) => typeof value === "string" || value === null
  },
  start: {
    name: "Start",
    description: "The start time of the appointment",
    example: "2023-10-01T10:00:00Z",
    validator: (value) => typeof value === "string"
  },
  end: {
    name: "End",
    description: "The end time of the appointment",
    example: "2023-10-01T11:00:00Z",
    validator: (value) => typeof value === "string"
  },
  arrivalWindowStart: {
    name: "Arrival Window Start",
    description: "The start of the arrival window",
    example: "2023-10-01T09:30:00Z",
    validator: (value) => typeof value === "string" || value === null
  },
  arrivalWindowEnd: {
    name: "Arrival Window End",
    description: "The end of the arrival window",
    example: "2023-10-01T10:30:00Z",
    validator: (value) => typeof value === "string" || value === null
  },
  status: {
    name: "Status",
    description: "The status of the appointment",
    example: "Scheduled",
    validator: (value) => typeof value === "string"
  },
  specialInstructions: {
    name: "Special Instructions",
    description: "Any special instructions for the appointment",
    example: "Customer prefers morning visits",
    validator: (value) => typeof value === "string" || value === null
  },
  createdOn: {
    name: "Created On",
    description: "The creation timestamp of the appointment",
    example: "2023-09-25T08:00:00Z",
    validator: (value) => typeof value === "string"
  },
  modifiedOn: {
    name: "Modified On",
    description: "The last modification timestamp of the appointment",
    example: "2023-09-26T09:00:00Z",
    validator: (value) => typeof value === "string"
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the associated customer",
    example: 54321,
    validator: (value) => typeof value === "number"
  },
  unused: {
    name: "Unused",
    description: "Indicates if the appointment is unused",
    example: false,
    validator: (value) => typeof value === "boolean"
  },
  createdById: {
    name: "Created By ID",
    description: "The ID of the user who created the appointment",
    example: 11223,
    validator: (value) => typeof value === "number"
  },
  isConfirmed: {
    name: "Is Confirmed",
    description: "Indicates if the appointment is confirmed",
    example: true,
    validator: (value) => typeof value === "boolean"
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_new_job_or_project_note_service_titan.ts
var node28 = { "name": "ServiceTitan New Job Or Project Note", "id": "on_new_job_or_project_note_service_titan", "descripition": "Triggers when a new note is added to a job or project in ServiceTitan", "inputSchema": {
  entityType: {
    name: "Note Type",
    description: "Select whether to trigger on Job Notes or Project Notes",
    required: true,
    validationSchema: /^(Job|Project)$/,
    errorMessage: "Note Type must be either 'Job' or 'Project'",
    input: {
      type: "select",
      options: [
        { label: "Job", value: "Job" },
        { label: "Project", value: "Project" }
      ]
    },
    parse: (value) => value
  },
  entityId: {
    name: "Entity ID",
    description: "The ID of the Job or Project to monitor for new notes (e.g., Job ID or Project ID)",
    required: true,
    validationSchema: /^\d+$/,
    errorMessage: "Entity ID must be a valid number",
    input: {
      type: "text"
    },
    parse: (value) => value
  }
}, "outputSchema": {
  text: {
    name: "Text",
    description: "The content of the note",
    example: "This is a sample note text.",
    validator: (value) => typeof value === "string"
  },
  isPinned: {
    name: "Is Pinned",
    description: "Indicates if the note is pinned",
    example: false,
    validator: (value) => typeof value === "boolean"
  },
  createdById: {
    name: "Created By ID",
    description: "The ID of the user who created the note",
    example: 12345,
    validator: (value) => typeof value === "number"
  },
  createdOn: {
    name: "Created On",
    description: "The date and time when the note was created",
    example: "2023-10-05T14:48:00.000Z",
    validator: (value) => true
    // Accept any value, further validation can be done if needed
  },
  modifiedOn: {
    name: "Modified On",
    description: "The date and time when the note was last modified",
    example: "2023-10-06T10:15:00.000Z",
    validator: (value) => true
    // Accept any value, further validation can be done if needed
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_new_lead_note_service_titan.ts
var node29 = { "name": "ServiceTitan New Lead Note", "id": "on_new_lead_note_service_titan", "descripition": "Triggers when a new note is added to a lead in ServiceTitan", "inputSchema": {}, "outputSchema": {
  id: {
    name: "ID",
    description: "The ID of the note",
    example: 123,
    validator: (value) => typeof value === "number"
  },
  text: {
    name: "Text",
    description: "The content of the note",
    example: "This is a note.",
    validator: (value) => typeof value === "string"
  },
  isPinned: {
    name: "Is Pinned",
    description: "Indicates if the note is pinned",
    example: false,
    validator: (value) => typeof value === "boolean"
  },
  createdById: {
    name: "Created By ID",
    description: "The ID of the user who created the note",
    example: 456,
    validator: (value) => typeof value === "number"
  },
  createdOn: {
    name: "Created On",
    description: "The timestamp when the note was created",
    example: "2023-10-01T12:34:56Z",
    validator: (value) => typeof value === "string"
  },
  modifiedOn: {
    name: "Modified On",
    description: "The timestamp when the note was last modified",
    example: "2023-10-02T12:34:56Z",
    validator: (value) => typeof value === "string"
  },
  leadId: {
    name: "Lead ID",
    description: "The ID of the associated lead",
    example: 789,
    validator: (value) => typeof value === "number"
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_new_call_service_titan.ts
var node30 = { "name": "ServiceTitan New Call", "id": "on_new_call_service_titan", "descripition": "Triggers when a new call is created in ServiceTitan", "inputSchema": {}, "outputSchema": {
  createdOn: {
    name: "Created On",
    description: "The date and time when the call was created",
    example: "2023-10-05T14:48:00.000Z",
    validator: (value) => true
  },
  active: {
    name: "Active",
    description: "Indicates if the call is active",
    example: true,
    validator: (value) => typeof value === "boolean"
  },
  id: {
    name: "ID",
    description: "The unique identifier for the call",
    example: 12345,
    validator: (value) => typeof value === "number"
  },
  receivedOn: {
    name: "Received On",
    description: "The date and time when the call was received",
    example: "2023-10-05T14:48:00.000Z",
    validator: (value) => true
  },
  duration: {
    name: "Duration",
    description: "The duration of the call",
    example: "00:05:30",
    validator: (value) => true
  },
  from: {
    name: "From",
    description: "The caller's phone number",
    example: "+1234567890",
    validator: (value) => typeof value === "string"
  },
  to: {
    name: "To",
    description: "The recipient's phone number",
    example: "+0987654321",
    validator: (value) => typeof value === "string"
  },
  direction: {
    name: "Direction",
    description: "The direction of the call (inbound/outbound)",
    example: "inbound",
    validator: (value) => typeof value === "string"
  },
  callType: {
    name: "Call Type",
    description: "The type of the call",
    example: null,
    validator: (value) => typeof value === "string" || value === null
  },
  reasonId: {
    name: "Reason ID",
    description: "The ID of the reason for the call",
    example: 1,
    validator: (value) => typeof value === "number"
  },
  reasonName: {
    name: "Reason Name",
    description: "The name of the reason for the call",
    example: "General Inquiry",
    validator: (value) => typeof value === "string"
  },
  reasonLead: {
    name: "Reason Lead",
    description: "Indicates if the reason is a lead",
    example: false,
    validator: (value) => typeof value === "boolean"
  },
  reasonActive: {
    name: "Reason Active",
    description: "Indicates if the reason is active",
    example: true,
    validator: (value) => typeof value === "boolean"
  },
  recordingUrl: {
    name: "Recording URL",
    description: "The URL of the call recording",
    example: "https://example.com/recording.mp3",
    validator: (value) => typeof value === "string"
  },
  voiceMailUrl: {
    name: "Voice Mail URL",
    description: "The URL of the voicemail",
    example: "https://example.com/voicemail.mp3",
    validator: (value) => typeof value === "string"
  },
  createdById: {
    name: "Created By ID",
    description: "The ID of the user who created the call record",
    example: 67890,
    validator: (value) => typeof value === "number"
  },
  createdByName: {
    name: "Created By Name",
    description: "The name of the user who created the call record",
    example: "John Doe",
    validator: (value) => typeof value === "string"
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the associated customer",
    example: 54321,
    validator: (value) => typeof value === "number"
  },
  customerName: {
    name: "Customer Name",
    description: "The name of the associated customer",
    example: "Acme Corp",
    validator: (value) => typeof value === "string"
  },
  campaignId: {
    name: "Campaign ID",
    description: "The ID of the associated campaign",
    example: 98765,
    validator: (value) => typeof value === "number"
  },
  campaignName: {
    name: "Campaign Name",
    description: "The name of the associated campaign",
    example: "Spring Sale",
    validator: (value) => typeof value === "string"
  },
  modifiedOn: {
    name: "Modified On",
    description: "The date and time when the call record was last modified",
    example: "2023-10-06T10:15:00.000Z",
    validator: (value) => true
  },
  agentId: {
    name: "Agent ID",
    description: "The ID of the agent who handled the call",
    example: 11223,
    validator: (value) => typeof value === "number"
  },
  agentName: {
    name: "Agent Name",
    description: "The name of the agent who handled the call",
    example: "Jane Smith",
    validator: (value) => typeof value === "string"
  },
  agentExternalId: {
    name: "Agent External ID",
    description: "The external ID of the agent",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  sid: {
    name: "SID",
    description: "The SID of the call",
    example: null,
    validator: (value) => typeof value === "string" || value === null
  },
  tags: {
    name: "Tags",
    description: "Tags associated with the call",
    example: ["important", "follow-up"],
    validator: (value) => Array.isArray(value) || value === null || typeof value === "string" && value.length === 0
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_updated_call_service_titan.ts
var node31 = { "name": "ServiceTitan Updated Call", "id": "on_updated_call_service_titan", "descripition": "Triggers when a call is updated in ServiceTitan", "inputSchema": {}, "outputSchema": {}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_updated_estimate_service_titan.ts
var node32 = { "name": "ServiceTitan Updated Estimate", "id": "on_updated_estimate_service_titan", "descripition": "Triggers when an estimate is updated in ServiceTitan", "inputSchema": {}, "outputSchema": {}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_new_project_service_titan.ts
var node33 = { "name": "ServiceTitan New Project", "id": "on_new_project_service_titan", "descripition": "Triggers when a new project is created in ServiceTitan", "inputSchema": {}, "outputSchema": {
  id: {
    name: "ID",
    description: "The ID of the project",
    example: 123,
    validator: (value) => typeof value === "number"
  },
  number: {
    name: "Number",
    description: "The project number",
    example: "PRJ-001",
    validator: (value) => typeof value === "string" || value === null
  },
  name: {
    name: "Name",
    description: "The name of the project",
    example: "New Project",
    validator: (value) => typeof value === "string" || value === null
  },
  summary: {
    name: "Summary",
    description: "A brief summary of the project",
    example: "This is a summary of the project.",
    validator: (value) => typeof value === "string" || value === null
  },
  status: {
    name: "Status",
    description: "The status of the project",
    example: "In Progress",
    validator: (value) => typeof value === "string" || value === null
  },
  statusId: {
    name: "Status ID",
    description: "The ID of the project's status",
    example: 1,
    validator: (value) => typeof value === "number" || value === null
  },
  subStatus: {
    name: "Sub Status",
    description: "The sub-status of the project",
    example: "On Hold",
    validator: (value) => typeof value === "string" || value === null
  },
  subStatusId: {
    name: "Sub Status ID",
    description: "The ID of the project's sub-status",
    example: 2,
    validator: (value) => typeof value === "number" || value === null
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the customer associated with the project",
    example: 456,
    validator: (value) => typeof value === "number"
  },
  locationId: {
    name: "Location ID",
    description: "The ID of the location associated with the project",
    example: 789,
    validator: (value) => typeof value === "number"
  },
  projectTypeId: {
    name: "Project Type ID",
    description: "The type ID of the project",
    example: 3,
    validator: (value) => typeof value === "number" || value === null
  },
  projectManagerIds: {
    name: "Project Manager IDs",
    description: "The IDs of the project managers",
    example: [101, 102],
    validator: (value) => Array.isArray(value) && value.every((item) => typeof item === "number")
  },
  businessUnitIds: {
    name: "Business Unit IDs",
    description: "The IDs of the business units associated with the project",
    example: [201, 202],
    validator: (value) => Array.isArray(value) && value.every((item) => typeof item === "number")
  },
  startDate: {
    name: "Start Date",
    description: "The start date of the project",
    example: "2023-10-01",
    validator: (value) => typeof value === "string" || value === null
  },
  targetCompletionDate: {
    name: "Target Completion Date",
    description: "The target completion date of the project",
    example: "2023-12-31",
    validator: (value) => typeof value === "string" || value === null
  },
  actualCompletionDate: {
    name: "Actual Completion Date",
    description: "The actual completion date of the project",
    example: "2024-01-15",
    validator: (value) => typeof value === "string" || value === null
  },
  modifiedOn: {
    name: "Modified On",
    description: "The last modification timestamp of the project",
    example: "2023-10-05T14:48:00.000Z",
    validator: (value) => typeof value === "string" || value === null
  },
  createdOn: {
    name: "Created On",
    description: "The creation timestamp of the project",
    example: "2023-10-01T12:00:00Z",
    validator: (value) => typeof value === "string"
  },
  jobIds: {
    name: "Job IDs",
    description: "List of job IDs associated with the project",
    example: [301, 302, 303],
    validator: (value) => Array.isArray(value) && value.every((item) => typeof item === "number")
  },
  customFields: {
    name: "Custom Fields",
    description: "List of custom fields associated with the project",
    example: [],
    validator: (value) => Array.isArray(value) || value === null
  },
  externalData: {
    name: "External Data",
    description: "List of external data associated with the project",
    example: [],
    validator: (value) => Array.isArray(value) || value === null
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/on_new_payment_service_titan.ts
var node34 = { "name": "ServiceTitan New Payment", "id": "on_new_payment_service_titan", "descripition": "Triggers when a new payment is created in ServiceTitan", "inputSchema": {}, "outputSchema": {
  id: {
    name: "ID",
    description: "The ID of the payment",
    example: 123,
    validator: (value) => typeof value === "number"
  },
  syncStatus: {
    name: "Sync Status",
    description: "The sync status of the payment",
    example: "Synced",
    validator: (value) => typeof value === "string" || value === null
  },
  referenceNumber: {
    name: "Reference Number",
    description: "The reference number of the payment",
    example: "REF12345",
    validator: (value) => typeof value === "string" || value === null
  },
  date: {
    name: "Date",
    description: "The date of the payment",
    example: "2023-10-01T12:00:00Z",
    validator: (value) => typeof value === "string" || value === null
  },
  type: {
    name: "Type",
    description: "The type of the payment",
    example: "Credit Card",
    validator: (value) => typeof value === "string" || value === null
  },
  typeId: {
    name: "Type ID",
    description: "The type ID of the payment",
    example: "CC",
    validator: (value) => typeof value === "string" || value === null
  },
  total: {
    name: "Total",
    description: "The total amount of the payment",
    example: "100.00",
    validator: (value) => typeof value === "string" || value === null
  },
  unappliedAmount: {
    name: "Unapplied Amount",
    description: "The unapplied amount of the payment",
    example: "0.00",
    validator: (value) => typeof value === "string" || value === null
  },
  memo: {
    name: "Memo",
    description: "The memo of the payment",
    example: "Payment for invoice INV-1001",
    validator: (value) => typeof value === "string" || value === null
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the customer associated with the payment",
    example: 67890,
    validator: (value) => typeof value === "number" || value === null
  },
  customerName: {
    name: "Customer Name",
    description: "The name of the customer associated with the payment",
    example: "John Doe",
    validator: (value) => typeof value === "string" || value === null
  },
  businessUnitId: {
    name: "Business Unit ID",
    description: "The ID of the business unit associated with the payment",
    example: "BU123",
    validator: (value) => typeof value === "string" || value === null
  },
  businessUnitName: {
    name: "Business Unit Name",
    description: "The name of the business unit associated with the payment",
    example: "Main Office",
    validator: (value) => typeof value === "string" || value === null
  },
  batchId: {
    name: "Batch ID",
    description: "The ID of the batch associated with the payment",
    example: "BATCH001",
    validator: (value) => typeof value === "string" || value === null
  },
  batchNumber: {
    name: "Batch Number",
    description: "The number of the batch associated with the payment",
    example: "1001",
    validator: (value) => typeof value === "string" || value === null
  },
  createdBy: {
    name: "Created By",
    description: "The user who created the payment",
    example: "admin",
    validator: (value) => typeof value === "string" || value === null
  },
  generalLedgerAccountId: {
    name: "General Ledger Account ID",
    description: "The ID of the general ledger account associated with the payment",
    example: "GL123",
    validator: (value) => typeof value === "string" || value === null
  },
  generalLedgerAccountNumber: {
    name: "General Ledger Account Number",
    description: "The number of the general ledger account associated with the payment",
    example: "4000",
    validator: (value) => typeof value === "string" || value === null
  },
  generalLedgerAccountName: {
    name: "General Ledger Account Name",
    description: "The name of the general ledger account associated with the payment",
    example: "Accounts Receivable",
    validator: (value) => typeof value === "string" || value === null
  },
  appliedTo: {
    name: "Applied To",
    description: "Details of invoices or credits the payment is applied to",
    example: [],
    validator: (value) => Array.isArray(value) || value === null
  },
  customFields: {
    name: "Custom Fields",
    description: "Custom fields associated with the payment",
    example: [],
    validator: (value) => Array.isArray(value) || value === null
  },
  authCode: {
    name: "Auth Code",
    description: "The authorization code for the payment",
    example: "AUTH12345",
    validator: (value) => typeof value === "string" || value === null
  },
  checkNumber: {
    name: "Check Number",
    description: "The check number if the payment was made by check",
    example: "CHK1001",
    validator: (value) => typeof value === "string" || value === null
  },
  modifiedOn: {
    name: "Modified On",
    description: "The date and time when the payment was last modified",
    example: "2023-10-02T15:30:00Z",
    validator: (value) => typeof value === "string"
  },
  createdOn: {
    name: "Created On",
    description: "The date and time when the payment was created",
    example: "2023-10-01T12:00:00Z",
    validator: (value) => typeof value === "string"
  },
  active: {
    name: "Active",
    description: "Indicates whether the payment is active",
    example: true,
    validator: (value) => typeof value === "boolean"
  }
}, "groups": ["ServiceTitan", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/apply_tag_service_titan.ts
var node35 = { "name": "Apply Tag Service Titan", "id": "apply_tag_service_titan", "descripition": "Applies a tag to a customer in ServiceTitan", "inputSchema": {
  tagTypeId: {
    name: "Tag ID from ServiceTitan",
    description: "The ID of the tag to apply",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Tag ID is invalid",
    input: {
      type: "number",
      min: 1,
      max: 2147483647
    },
    parse: (value) => parseInt(value, 10)
  },
  customerId: {
    name: "Customer ID from ServiceTitan",
    description: "The ID of the customer to apply the tag to",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Customer ID is invalid",
    input: {
      type: "number",
      min: 1,
      max: 2147483647
    },
    parse: (value) => parseInt(value, 10)
  }
}, "outputSchema": {}, "groups": ["ServiceTitan", "Tags"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/add_note_to_lead_service_titan.ts
var node36 = { "name": "Add Note To Lead Service Titan", "id": "add_note_to_lead_service_titan", "descripition": "Adds a note to a lead in ServiceTitan", "inputSchema": {
  leadId: {
    name: "Lead ID",
    description: "The ID of the lead to add a note to",
    required: true,
    validationSchema: /^\d+$/,
    errorMessage: "Lead ID must be a valid number",
    input: {
      type: "number",
      max: 2147483647,
      min: 1
    },
    parse: (value) => parseInt(value, 10)
  },
  text: {
    name: "Note Text",
    description: "The content of the note to be added",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Note text is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  }
}, "outputSchema": {}, "groups": ["ServiceTitan", "Notes"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/get_lead_service_titan.ts
var node37 = { "name": "Get Lead Service Titan", "id": "get_lead_service_titan", "descripition": "Get details of a specific lead from ServiceTitan", "inputSchema": {
  customerId: {
    name: "Customer ID",
    description: "The ID of the customer associated with the lead (optional)",
    required: false,
    validationSchema: /^\d+$/,
    errorMessage: "Customer ID must be a number",
    input: {
      type: "number",
      min: 1,
      max: 2147483647
    },
    parse: (value) => parseInt(value, 10)
  },
  leadId: {
    name: "Lead ID",
    description: "The ID of the lead to retrieve (optional)",
    required: false,
    validationSchema: /^\d+$/,
    errorMessage: "Lead ID must be a number",
    input: {
      type: "number",
      min: 1,
      max: 2147483647
    },
    parse: (value) => parseInt(value, 10)
  },
  phone: {
    name: "Phone",
    description: "The phone number of the lead to retrieve (optional)",
    required: false,
    validationSchema: /^\+?[1-9]\d{1,14}$/,
    errorMessage: "Phone must be a valid phone number",
    input: {
      type: "text"
    },
    parse: (value) => value.trim()
  }
}, "outputSchema": {
  id: {
    name: "ID",
    description: "The ID of the lead",
    example: 123,
    validator: (value) => typeof value === "number"
  },
  status: {
    name: "Status",
    description: "The status of the lead",
    example: "New",
    validator: (value) => typeof value === "string"
  },
  priority: {
    name: "Priority",
    description: "The priority of the lead",
    example: "High",
    validator: (value) => typeof value === "string"
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the customer associated with the lead",
    example: 456,
    validator: (value) => typeof value === "number" || value === null
  },
  locationId: {
    name: "Location ID",
    description: "The ID of the location associated with the lead",
    example: 789,
    validator: (value) => typeof value === "number" || value === null
  },
  businessUnitId: {
    name: "Business Unit ID",
    description: "The ID of the business unit associated with the lead",
    example: 101,
    validator: (value) => typeof value === "number" || value === null
  },
  jobTypeId: {
    name: "Job Type ID",
    description: "The ID of the job type associated with the lead",
    example: 202,
    validator: (value) => typeof value === "number" || value === null
  },
  campaignId: {
    name: "Campaign ID",
    description: "The ID of the campaign associated with the lead",
    example: 303,
    validator: (value) => typeof value === "number"
  },
  followUpDate: {
    name: "Follow Up Date",
    description: "The follow-up date for the lead",
    example: "2023-10-01T10:00:00Z",
    validator: (value) => typeof value === "string" || value === null
  },
  createdById: {
    name: "Created By ID",
    description: "The ID of the user who created the lead",
    example: 404,
    validator: (value) => typeof value === "number"
  },
  createdOn: {
    name: "Created On",
    description: "The date and time when the lead was created",
    example: "2023-10-01T09:00:00Z",
    validator: (value) => typeof value === "string"
  },
  modifiedOn: {
    name: "Modified On",
    description: "The date and time when the lead was last modified",
    example: "2023-10-01T09:30:00Z",
    validator: (value) => typeof value === "string"
  },
  tagTypeIds: {
    name: "Tag Type IDs",
    description: "The tag type IDs associated with the lead",
    example: [1, 2, 3],
    validator: (value) => Array.isArray(value) && value.every((item) => typeof item === "number") || value === null
  },
  dismissingReasonId: {
    name: "Dismissing Reason ID",
    description: "The ID of the reason for dismissing the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  summary: {
    name: "Summary",
    description: "A brief summary of the lead",
    example: "Customer interested in HVAC services.",
    validator: (value) => typeof value === "string" || value === null
  },
  callReasonId: {
    name: "Call Reason ID",
    description: "The ID of the reason for the call associated with the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  callId: {
    name: "Call ID",
    description: "The ID of the call associated with the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  bookingId: {
    name: "Booking ID",
    description: "The ID of the booking associated with the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  manualCallId: {
    name: "Manual Call ID",
    description: "The ID of the manual call associated with the lead",
    example: null,
    validator: (value) => typeof value === "number" || value === null
  },
  leadUrl: {
    name: "Lead URL",
    description: "The URL of the lead in ServiceTitan",
    example: "https://app.servicetitan.com/leads/123",
    validator: (value) => typeof value === "string" || value === null
  },
  leadCustomerName: {
    name: "Lead Customer Name",
    description: "The name of the customer associated with the lead",
    example: "Jane Smith",
    validator: (value) => typeof value === "string" || value === null
  },
  leadPhone: {
    name: "Lead Phone",
    description: "The phone number of the lead",
    example: "555-123-4567",
    validator: (value) => typeof value === "string" || value === null
  },
  leadEmail: {
    name: "Lead Email",
    description: "The email address of the lead",
    example: "johndoe@email.com",
    validator: (value) => typeof value === "string" || value === null
  },
  leadStreet: {
    name: "Lead Street",
    description: "The street address of the lead",
    example: "123 Main St",
    validator: (value) => typeof value === "string" || value === null
  },
  leadUnit: {
    name: "Lead Unit",
    description: "The unit or apartment number of the lead",
    example: "Apt 4B",
    validator: (value) => typeof value === "string" || value === null
  },
  leadCity: {
    name: "Lead City",
    description: "The city of the lead",
    example: "Springfield",
    validator: (value) => typeof value === "string" || value === null
  },
  leadState: {
    name: "Lead State",
    description: "The state of the lead",
    example: "IL",
    validator: (value) => typeof value === "string" || value === null
  },
  leadZip: {
    name: "Lead ZIP Code",
    description: "The ZIP code of the lead",
    example: "62704",
    validator: (value) => typeof value === "string" || value === null
  },
  leadCountry: {
    name: "Lead Country",
    description: "The country of the lead",
    example: "USA",
    validator: (value) => typeof value === "string" || value === null
  }
}, "groups": ["ServiceTitan", "Leads"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/on_email_received.ts
var node38 = { "name": "Email Received", "id": "on_email_received", "descripition": "Triggers when a new email is received in the connected email account.\n It automatically extracts key information like lead's name, email, phone number, and any other fields present in the email body.", "inputSchema": {}, "outputSchema": {
  from: {
    name: "From",
    description: "The email address of the sender",
    example: "example@gmail.com",
    validator: (value) => {
      if (typeof value !== "string") return false;
      const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return emailRegex.test(value);
    }
  },
  subject: {
    name: "Subject",
    description: "The subject of the email",
    example: "Meeting Reminder",
    validator: (value) => typeof value === "string"
  },
  body: {
    name: "Body",
    description: "The plain text body of the email",
    example: "Don't forget about our meeting tomorrow at 10 AM.",
    validator: (value) => typeof value === "string"
  },
  firstName: {
    name: "First Name",
    description: "The first name of the person",
    example: "John",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  lastName: {
    name: "Last Name",
    description: "The last name of the person",
    example: "Doe",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  email: {
    name: "Email",
    description: "Email address of the person",
    example: "john.doe@example.com",
    validator: function(value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return typeof value === "string" && emailRegex.test(value);
    }
  },
  phone: {
    name: "Phone Number",
    description: "Contact phone number",
    example: "+15551234567",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  street_address: {
    name: "Street Address",
    description: "The street address of the person",
    example: "123 Main St",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  apartment_suite: {
    name: "Apartment/Suite",
    description: "The apartment or suite number",
    example: "Apt 4B",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  city: {
    name: "City",
    description: "The city of the person's address",
    example: "New York",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  state: {
    name: "State",
    description: "The state of the person's address",
    example: "NY",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  zip_code: {
    name: "Zip Code",
    description: "The zip code of the person's address",
    example: "10001",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  country: {
    name: "Country",
    description: "The country of the person's address",
    example: "USA",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  website: {
    name: "Website",
    description: "The person's website",
    example: "https://example.com",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  social_links: {
    name: "Social Links",
    description: "Links to the person's social media profiles",
    example: "https://linkedin.com/in/johndoe",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  birth_date: {
    name: "Birth Date",
    description: "The person's birth date",
    example: "1990-01-01",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  gender: {
    name: "Gender",
    description: "The person's gender",
    example: "Male",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  language: {
    name: "Language",
    description: "The person's preferred language",
    example: "English",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  industry: {
    name: "Industry",
    description: "The industry the person works in",
    example: "Technology",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  company_size: {
    name: "Company Size",
    description: "The size of the person's company",
    example: "51-200 employees",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  annual_revenue: {
    name: "Annual Revenue",
    description: "The annual revenue of the person's company",
    example: "$10M - $50M",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  department: {
    name: "Department",
    description: "The department the person works in",
    example: "Marketing",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  otherFields: {
    name: "Additional Information",
    description: "Any other information provided by the webhook",
    example: { company: "Acme Inc", role: "Manager" },
    validator: function(value) {
      return typeof value === "object" && value !== null;
    }
  }
}, "groups": [], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/process_variable.ts
var node39 = { "name": "Process Variable", "id": "process_variable", "descripition": "Processes a variable with various string, number, and JSON operations", "inputSchema": {
  value: {
    name: "Value",
    description: "The value to process",
    validationSchema: /.*/,
    errorMessage: "Please provide a valid value",
    required: true,
    input: {
      type: "text",
      placeholder: "Value to process"
    },
    parse: function(value) {
      return value;
    }
  },
  operation: {
    name: "Operation",
    description: "The type of operation to perform on the value",
    validationSchema: /.*/,
    errorMessage: "Please select a valid operation",
    required: true,
    input: {
      type: "select",
      options: [
        { label: "To Uppercase", value: "to_uppercase" },
        { label: "To Lowercase", value: "to_lowercase" },
        { label: "Capitalize", value: "capitalize" },
        { label: "Trim", value: "trim" },
        { label: "Substring", value: "substring" },
        { label: "Replace", value: "replace" },
        { label: "Split", value: "split" },
        { label: "Join", value: "join" },
        { label: "Length", value: "length" },
        { label: "Number Operation", value: "number_operation" },
        { label: "Parse JSON", value: "parse_json" },
        { label: "Stringify JSON", value: "stringify_json" }
      ]
    },
    parse: function(value) {
      return value;
    }
  },
  additionalValue: {
    name: "Additional Value",
    description: "Additional value needed for operations like replace, split, join, etc.",
    validationSchema: /.*/,
    getVisible: (currentValues) => {
      const op = currentValues["operation"];
      return op === "replace" || op === "split" || op === "join" || op === "number_operation";
    },
    errorMessage: "Please provide a valid value",
    required: false,
    input: {
      type: "text",
      placeholder: "Additional value"
    },
    parse: function(value) {
      return value;
    }
  },
  startIndex: {
    name: "Start Index",
    description: "Starting index for operations like substring",
    validationSchema: /^\d+$/,
    errorMessage: "Please provide a valid number",
    getVisible: (currentValues) => {
      return currentValues["operation"] === "substring";
    },
    required: false,
    input: {
      type: "number",
      min: 0,
      max: 1e6
    },
    parse: function(value) {
      return parseInt(value, 10);
    }
  },
  endIndex: {
    name: "End Index",
    description: "Ending index for operations like substring",
    validationSchema: /^\d+$/,
    errorMessage: "Please provide a valid number",
    getVisible: (currentValues) => {
      return currentValues["operation"] === "substring";
    },
    required: false,
    input: {
      type: "number",
      min: 0,
      max: 1e6
    },
    parse: function(value) {
      return parseInt(value, 10);
    }
  },
  mathOperation: {
    name: "Math Operation",
    description: "Type of mathematical operation to perform",
    validationSchema: /.*/,
    getVisible: (currentValues) => {
      return currentValues["operation"] === "number_operation";
    },
    errorMessage: "Please select a valid math operation",
    required: false,
    input: {
      type: "select",
      options: [
        { label: "Add", value: "add" },
        { label: "Subtract", value: "subtract" },
        { label: "Multiply", value: "multiply" },
        { label: "Divide", value: "divide" },
        { label: "Modulo", value: "modulo" },
        { label: "Round", value: "round" },
        { label: "Floor", value: "floor" },
        { label: "Ceiling", value: "ceil" }
      ]
    },
    parse: function(value) {
      return value;
    }
  },
  dateOperation: {
    name: "Date Operation",
    description: "Type of date operation to perform",
    validationSchema: /.*/,
    getVisible: (currentValues) => {
      return currentValues["operation"] === "date_operation";
    },
    errorMessage: "Please select a valid date operation",
    required: false,
    input: {
      type: "select",
      options: [
        { label: "Add", value: "add" },
        { label: "Subtract", value: "subtract" }
      ]
    },
    parse: function(value) {
      return value;
    }
  },
  dateUnit: {
    name: "Date Unit",
    description: "Unit of time for date operation",
    validationSchema: /.*/,
    getVisible: (currentValues) => {
      return currentValues["operation"] === "date_operation";
    },
    errorMessage: "Please select a valid date unit",
    required: false,
    input: {
      type: "select",
      options: [
        { label: "Milliseconds", value: "milliseconds" },
        { label: "Seconds", value: "seconds" },
        { label: "Minutes", value: "minutes" },
        { label: "Hours", value: "hours" },
        { label: "Days", value: "days" }
      ]
    },
    parse: function(value) {
      return value;
    }
  },
  dateAmount: {
    name: "Date Amount",
    description: "Amount of time to add or subtract",
    validationSchema: /^\d+$/,
    getVisible: (currentValues) => {
      return currentValues["operation"] === "date_operation";
    },
    errorMessage: "Please provide a valid number",
    required: false,
    input: {
      type: "number",
      min: 0,
      max: 1e6
    },
    parse: function(value) {
      return parseInt(value, 10);
    }
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "The result of the processing operation",
    validator: (value) => true,
    // Accept any type based on the operation
    example: "processed result"
  }
}, "groups": ["Data Processing", "Utilities"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" }, "error": { "id": "error", "name": "Error", "description": "An error occurred during execution" } }, "isTriggerNode": false, "cost": 0 };

// src/get_constant.ts
var node40 = { "name": "Get Constant", "id": "get_constant", "descripition": "Returns various useful constants like time information, system values, and random data", "inputSchema": {
  constantType: {
    name: "Constant Type",
    description: "The type of constant value to return",
    validationSchema: /.*/,
    errorMessage: "Please select a valid constant type",
    required: true,
    input: {
      type: "select",
      options: [
        { label: "Current Date (ISO)", value: "current_date_iso" },
        { label: "Current Time (ISO)", value: "current_time_iso" },
        { label: "Current DateTime (ISO)", value: "current_datetime_iso" },
        {
          label: "Unix Timestamp (seconds)",
          value: "unix_timestamp_seconds"
        },
        {
          label: "Unix Timestamp (milliseconds)",
          value: "unix_timestamp_ms"
        },
        { label: "Day of Week (0-6)", value: "day_of_week" },
        { label: "Day of Week (name)", value: "day_of_week_name" },
        { label: "Month (1-12)", value: "month_number" },
        { label: "Month (name)", value: "month_name" },
        { label: "Year", value: "year" },
        { label: "Hour (0-23)", value: "hour" },
        { label: "Minute (0-59)", value: "minute" },
        { label: "Second (0-59)", value: "second" },
        // { label: "Random UUID", value: "random_uuid" },
        // { label: "Random Number (0-1)", value: "random_number" },
        { label: "Random Integer (1-100)", value: "random_integer_100" }
        // { label: "Random Boolean", value: "random_boolean" },
      ],
      default: {
        label: "Current DateTime (ISO)",
        value: "current_datetime_iso"
      }
    },
    parse: (value) => value
  },
  timezone: {
    name: "Timezone",
    description: "Timezone for time-related constants",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid timezone",
    required: false,
    input: {
      type: "select",
      options: [
        { label: "Africa/Abidjan", value: "Africa/Abidjan" },
        { label: "Africa/Accra", value: "Africa/Accra" },
        { label: "Africa/Addis_Ababa", value: "Africa/Addis_Ababa" },
        { label: "Africa/Algiers", value: "Africa/Algiers" },
        { label: "Africa/Asmara", value: "Africa/Asmara" },
        { label: "Africa/Asmera", value: "Africa/Asmera" },
        { label: "Africa/Bamako", value: "Africa/Bamako" },
        { label: "Africa/Bangui", value: "Africa/Bangui" },
        { label: "Africa/Banjul", value: "Africa/Banjul" },
        { label: "Africa/Bissau", value: "Africa/Bissau" },
        { label: "Africa/Blantyre", value: "Africa/Blantyre" },
        { label: "Africa/Brazzaville", value: "Africa/Brazzaville" },
        { label: "Africa/Bujumbura", value: "Africa/Bujumbura" },
        { label: "Africa/Cairo", value: "Africa/Cairo" },
        { label: "Africa/Casablanca", value: "Africa/Casablanca" },
        { label: "Africa/Ceuta", value: "Africa/Ceuta" },
        { label: "Africa/Conakry", value: "Africa/Conakry" },
        { label: "Africa/Dakar", value: "Africa/Dakar" },
        { label: "Africa/Dar_es_Salaam", value: "Africa/Dar_es_Salaam" },
        { label: "Africa/Djibouti", value: "Africa/Djibouti" },
        { label: "Africa/Douala", value: "Africa/Douala" },
        { label: "Africa/El_Aaiun", value: "Africa/El_Aaiun" },
        { label: "Africa/Freetown", value: "Africa/Freetown" },
        { label: "Africa/Gaborone", value: "Africa/Gaborone" },
        { label: "Africa/Harare", value: "Africa/Harare" },
        { label: "Africa/Johannesburg", value: "Africa/Johannesburg" },
        { label: "Africa/Juba", value: "Africa/Juba" },
        { label: "Africa/Kampala", value: "Africa/Kampala" },
        { label: "Africa/Khartoum", value: "Africa/Khartoum" },
        { label: "Africa/Kigali", value: "Africa/Kigali" },
        { label: "Africa/Kinshasa", value: "Africa/Kinshasa" },
        { label: "Africa/Lagos", value: "Africa/Lagos" },
        { label: "Africa/Libreville", value: "Africa/Libreville" },
        { label: "Africa/Lome", value: "Africa/Lome" },
        { label: "Africa/Luanda", value: "Africa/Luanda" },
        { label: "Africa/Lubumbashi", value: "Africa/Lubumbashi" },
        { label: "Africa/Lusaka", value: "Africa/Lusaka" },
        { label: "Africa/Malabo", value: "Africa/Malabo" },
        { label: "Africa/Maputo", value: "Africa/Maputo" },
        { label: "Africa/Maseru", value: "Africa/Maseru" },
        { label: "Africa/Mbabane", value: "Africa/Mbabane" },
        { label: "Africa/Mogadishu", value: "Africa/Mogadishu" },
        { label: "Africa/Monrovia", value: "Africa/Monrovia" },
        { label: "Africa/Nairobi", value: "Africa/Nairobi" },
        { label: "Africa/Ndjamena", value: "Africa/Ndjamena" },
        { label: "Africa/Niamey", value: "Africa/Niamey" },
        { label: "Africa/Nouakchott", value: "Africa/Nouakchott" },
        { label: "Africa/Ouagadougou", value: "Africa/Ouagadougou" },
        { label: "Africa/Porto-Novo", value: "Africa/Porto-Novo" },
        { label: "Africa/Sao_Tome", value: "Africa/Sao_Tome" },
        { label: "Africa/Timbuktu", value: "Africa/Timbuktu" },
        { label: "Africa/Tripoli", value: "Africa/Tripoli" },
        { label: "Africa/Tunis", value: "Africa/Tunis" },
        { label: "Africa/Windhoek", value: "Africa/Windhoek" },
        { label: "America/Adak", value: "America/Adak" },
        { label: "America/Anchorage", value: "America/Anchorage" },
        { label: "America/Anguilla", value: "America/Anguilla" },
        { label: "America/Antigua", value: "America/Antigua" },
        { label: "America/Araguaina", value: "America/Araguaina" },
        {
          label: "America/Argentina/Buenos_Aires",
          value: "America/Argentina/Buenos_Aires"
        },
        {
          label: "America/Argentina/Catamarca",
          value: "America/Argentina/Catamarca"
        },
        {
          label: "America/Argentina/ComodRivadavia",
          value: "America/Argentina/ComodRivadavia"
        },
        {
          label: "America/Argentina/Cordoba",
          value: "America/Argentina/Cordoba"
        },
        {
          label: "America/Argentina/Jujuy",
          value: "America/Argentina/Jujuy"
        },
        {
          label: "America/Argentina/La_Rioja",
          value: "America/Argentina/La_Rioja"
        },
        {
          label: "America/Argentina/Mendoza",
          value: "America/Argentina/Mendoza"
        },
        {
          label: "America/Argentina/Rio_Gallegos",
          value: "America/Argentina/Rio_Gallegos"
        },
        {
          label: "America/Argentina/Salta",
          value: "America/Argentina/Salta"
        },
        {
          label: "America/Argentina/San_Juan",
          value: "America/Argentina/San_Juan"
        },
        {
          label: "America/Argentina/San_Luis",
          value: "America/Argentina/San_Luis"
        },
        {
          label: "America/Argentina/Tucuman",
          value: "America/Argentina/Tucuman"
        },
        {
          label: "America/Argentina/Ushuaia",
          value: "America/Argentina/Ushuaia"
        },
        { label: "America/Aruba", value: "America/Aruba" },
        { label: "America/Asuncion", value: "America/Asuncion" },
        { label: "America/Atikokan", value: "America/Atikokan" },
        { label: "America/Atka", value: "America/Atka" },
        { label: "America/Bahia", value: "America/Bahia" },
        { label: "America/Bahia_Banderas", value: "America/Bahia_Banderas" },
        { label: "America/Barbados", value: "America/Barbados" },
        { label: "America/Belem", value: "America/Belem" },
        { label: "America/Belize", value: "America/Belize" },
        { label: "America/Blanc-Sablon", value: "America/Blanc-Sablon" },
        { label: "America/Boa_Vista", value: "America/Boa_Vista" },
        { label: "America/Bogota", value: "America/Bogota" },
        { label: "America/Boise", value: "America/Boise" },
        { label: "America/Buenos_Aires", value: "America/Buenos_Aires" },
        { label: "America/Cambridge_Bay", value: "America/Cambridge_Bay" },
        { label: "America/Campo_Grande", value: "America/Campo_Grande" },
        { label: "America/Cancun", value: "America/Cancun" },
        { label: "America/Caracas", value: "America/Caracas" },
        { label: "America/Catamarca", value: "America/Catamarca" },
        { label: "America/Cayenne", value: "America/Cayenne" },
        { label: "America/Cayman", value: "America/Cayman" },
        { label: "America/Chicago", value: "America/Chicago" },
        { label: "America/Chihuahua", value: "America/Chihuahua" },
        { label: "America/Ciudad_Juarez", value: "America/Ciudad_Juarez" },
        { label: "America/Coral_Harbour", value: "America/Coral_Harbour" },
        { label: "America/Cordoba", value: "America/Cordoba" },
        { label: "America/Costa_Rica", value: "America/Costa_Rica" },
        { label: "America/Coyhaique", value: "America/Coyhaique" },
        { label: "America/Creston", value: "America/Creston" },
        { label: "America/Cuiaba", value: "America/Cuiaba" },
        { label: "America/Curacao", value: "America/Curacao" },
        { label: "America/Danmarkshavn", value: "America/Danmarkshavn" },
        { label: "America/Dawson", value: "America/Dawson" },
        { label: "America/Dawson_Creek", value: "America/Dawson_Creek" },
        { label: "America/Denver", value: "America/Denver" },
        { label: "America/Detroit", value: "America/Detroit" },
        { label: "America/Dominica", value: "America/Dominica" },
        { label: "America/Edmonton", value: "America/Edmonton" },
        { label: "America/Eirunepe", value: "America/Eirunepe" },
        { label: "America/El_Salvador", value: "America/El_Salvador" },
        { label: "America/Ensenada", value: "America/Ensenada" },
        { label: "America/Fort_Nelson", value: "America/Fort_Nelson" },
        { label: "America/Fort_Wayne", value: "America/Fort_Wayne" },
        { label: "America/Fortaleza", value: "America/Fortaleza" },
        { label: "America/Glace_Bay", value: "America/Glace_Bay" },
        { label: "America/Godthab", value: "America/Godthab" },
        { label: "America/Goose_Bay", value: "America/Goose_Bay" },
        { label: "America/Grand_Turk", value: "America/Grand_Turk" },
        { label: "America/Grenada", value: "America/Grenada" },
        { label: "America/Guadeloupe", value: "America/Guadeloupe" },
        { label: "America/Guatemala", value: "America/Guatemala" },
        { label: "America/Guayaquil", value: "America/Guayaquil" },
        { label: "America/Guyana", value: "America/Guyana" },
        { label: "America/Halifax", value: "America/Halifax" },
        { label: "America/Havana", value: "America/Havana" },
        { label: "America/Hermosillo", value: "America/Hermosillo" },
        {
          label: "America/Indiana/Indianapolis",
          value: "America/Indiana/Indianapolis"
        },
        { label: "America/Indiana/Knox", value: "America/Indiana/Knox" },
        {
          label: "America/Indiana/Marengo",
          value: "America/Indiana/Marengo"
        },
        {
          label: "America/Indiana/Petersburg",
          value: "America/Indiana/Petersburg"
        },
        {
          label: "America/Indiana/Tell_City",
          value: "America/Indiana/Tell_City"
        },
        { label: "America/Indiana/Vevay", value: "America/Indiana/Vevay" },
        {
          label: "America/Indiana/Vincennes",
          value: "America/Indiana/Vincennes"
        },
        {
          label: "America/Indiana/Winamac",
          value: "America/Indiana/Winamac"
        },
        { label: "America/Indianapolis", value: "America/Indianapolis" },
        { label: "America/Inuvik", value: "America/Inuvik" },
        { label: "America/Iqaluit", value: "America/Iqaluit" },
        { label: "America/Jamaica", value: "America/Jamaica" },
        { label: "America/Jujuy", value: "America/Jujuy" },
        { label: "America/Juneau", value: "America/Juneau" },
        {
          label: "America/Kentucky/Louisville",
          value: "America/Kentucky/Louisville"
        },
        {
          label: "America/Kentucky/Monticello",
          value: "America/Kentucky/Monticello"
        },
        { label: "America/Knox_IN", value: "America/Knox_IN" },
        { label: "America/Kralendijk", value: "America/Kralendijk" },
        { label: "America/La_Paz", value: "America/La_Paz" },
        { label: "America/Lima", value: "America/Lima" },
        { label: "America/Los_Angeles", value: "America/Los_Angeles" },
        { label: "America/Louisville", value: "America/Louisville" },
        { label: "America/Lower_Princes", value: "America/Lower_Princes" },
        { label: "America/Maceio", value: "America/Maceio" },
        { label: "America/Managua", value: "America/Managua" },
        { label: "America/Manaus", value: "America/Manaus" },
        { label: "America/Marigot", value: "America/Marigot" },
        { label: "America/Martinique", value: "America/Martinique" },
        { label: "America/Matamoros", value: "America/Matamoros" },
        { label: "America/Mazatlan", value: "America/Mazatlan" },
        { label: "America/Mendoza", value: "America/Mendoza" },
        { label: "America/Menominee", value: "America/Menominee" },
        { label: "America/Merida", value: "America/Merida" },
        { label: "America/Metlakatla", value: "America/Metlakatla" },
        { label: "America/Mexico_City", value: "America/Mexico_City" },
        { label: "America/Miquelon", value: "America/Miquelon" },
        { label: "America/Moncton", value: "America/Moncton" },
        { label: "America/Monterrey", value: "America/Monterrey" },
        { label: "America/Montevideo", value: "America/Montevideo" },
        { label: "America/Montreal", value: "America/Montreal" },
        { label: "America/Montserrat", value: "America/Montserrat" },
        { label: "America/Nassau", value: "America/Nassau" },
        { label: "America/New_York", value: "America/New_York" },
        { label: "America/Nipigon", value: "America/Nipigon" },
        { label: "America/Nome", value: "America/Nome" },
        { label: "America/Noronha", value: "America/Noronha" },
        {
          label: "America/North_Dakota/Beulah",
          value: "America/North_Dakota/Beulah"
        },
        {
          label: "America/North_Dakota/Center",
          value: "America/North_Dakota/Center"
        },
        {
          label: "America/North_Dakota/New_Salem",
          value: "America/North_Dakota/New_Salem"
        },
        { label: "America/Nuuk", value: "America/Nuuk" },
        { label: "America/Ojinaga", value: "America/Ojinaga" },
        { label: "America/Panama", value: "America/Panama" },
        { label: "America/Pangnirtung", value: "America/Pangnirtung" },
        { label: "America/Paramaribo", value: "America/Paramaribo" },
        { label: "America/Phoenix", value: "America/Phoenix" },
        { label: "America/Port-au-Prince", value: "America/Port-au-Prince" },
        { label: "America/Port_of_Spain", value: "America/Port_of_Spain" },
        { label: "America/Porto_Acre", value: "America/Porto_Acre" },
        { label: "America/Porto_Velho", value: "America/Porto_Velho" },
        { label: "America/Puerto_Rico", value: "America/Puerto_Rico" },
        { label: "America/Punta_Arenas", value: "America/Punta_Arenas" },
        { label: "America/Rainy_River", value: "America/Rainy_River" },
        { label: "America/Rankin_Inlet", value: "America/Rankin_Inlet" },
        { label: "America/Recife", value: "America/Recife" },
        { label: "America/Regina", value: "America/Regina" },
        { label: "America/Resolute", value: "America/Resolute" },
        { label: "America/Rio_Branco", value: "America/Rio_Branco" },
        { label: "America/Rosario", value: "America/Rosario" },
        { label: "America/Santa_Isabel", value: "America/Santa_Isabel" },
        { label: "America/Santarem", value: "America/Santarem" },
        { label: "America/Santiago", value: "America/Santiago" },
        { label: "America/Santo_Domingo", value: "America/Santo_Domingo" },
        { label: "America/Sao_Paulo", value: "America/Sao_Paulo" },
        { label: "America/Scoresbysund", value: "America/Scoresbysund" },
        { label: "America/Shiprock", value: "America/Shiprock" },
        { label: "America/Sitka", value: "America/Sitka" },
        { label: "America/St_Barthelemy", value: "America/St_Barthelemy" },
        { label: "America/St_Johns", value: "America/St_Johns" },
        { label: "America/St_Kitts", value: "America/St_Kitts" },
        { label: "America/St_Lucia", value: "America/St_Lucia" },
        { label: "America/St_Thomas", value: "America/St_Thomas" },
        { label: "America/St_Vincent", value: "America/St_Vincent" },
        { label: "America/Swift_Current", value: "America/Swift_Current" },
        { label: "America/Tegucigalpa", value: "America/Tegucigalpa" },
        { label: "America/Thule", value: "America/Thule" },
        { label: "America/Thunder_Bay", value: "America/Thunder_Bay" },
        { label: "America/Tijuana", value: "America/Tijuana" },
        { label: "America/Toronto", value: "America/Toronto" },
        { label: "America/Tortola", value: "America/Tortola" },
        { label: "America/Vancouver", value: "America/Vancouver" },
        { label: "America/Virgin", value: "America/Virgin" },
        { label: "America/Whitehorse", value: "America/Whitehorse" },
        { label: "America/Winnipeg", value: "America/Winnipeg" },
        { label: "America/Yakutat", value: "America/Yakutat" },
        { label: "America/Yellowknife", value: "America/Yellowknife" },
        { label: "Antarctica/Casey", value: "Antarctica/Casey" },
        { label: "Antarctica/Davis", value: "Antarctica/Davis" },
        {
          label: "Antarctica/DumontDUrville",
          value: "Antarctica/DumontDUrville"
        },
        { label: "Antarctica/Macquarie", value: "Antarctica/Macquarie" },
        { label: "Antarctica/Mawson", value: "Antarctica/Mawson" },
        { label: "Antarctica/McMurdo", value: "Antarctica/McMurdo" },
        { label: "Antarctica/Palmer", value: "Antarctica/Palmer" },
        { label: "Antarctica/Rothera", value: "Antarctica/Rothera" },
        { label: "Antarctica/South_Pole", value: "Antarctica/South_Pole" },
        { label: "Antarctica/Syowa", value: "Antarctica/Syowa" },
        { label: "Antarctica/Troll", value: "Antarctica/Troll" },
        { label: "Antarctica/Vostok", value: "Antarctica/Vostok" },
        { label: "Arctic/Longyearbyen", value: "Arctic/Longyearbyen" },
        { label: "Asia/Aden", value: "Asia/Aden" },
        { label: "Asia/Almaty", value: "Asia/Almaty" },
        { label: "Asia/Amman", value: "Asia/Amman" },
        { label: "Asia/Anadyr", value: "Asia/Anadyr" },
        { label: "Asia/Aqtau", value: "Asia/Aqtau" },
        { label: "Asia/Aqtobe", value: "Asia/Aqtobe" },
        { label: "Asia/Ashgabat", value: "Asia/Ashgabat" },
        { label: "Asia/Ashkhabad", value: "Asia/Ashkhabad" },
        { label: "Asia/Atyrau", value: "Asia/Atyrau" },
        { label: "Asia/Baghdad", value: "Asia/Baghdad" },
        { label: "Asia/Bahrain", value: "Asia/Bahrain" },
        { label: "Asia/Baku", value: "Asia/Baku" },
        { label: "Asia/Bangkok", value: "Asia/Bangkok" },
        { label: "Asia/Barnaul", value: "Asia/Barnaul" },
        { label: "Asia/Beirut", value: "Asia/Beirut" },
        { label: "Asia/Bishkek", value: "Asia/Bishkek" },
        { label: "Asia/Brunei", value: "Asia/Brunei" },
        { label: "Asia/Calcutta", value: "Asia/Calcutta" },
        { label: "Asia/Chita", value: "Asia/Chita" },
        { label: "Asia/Choibalsan", value: "Asia/Choibalsan" },
        { label: "Asia/Chongqing", value: "Asia/Chongqing" },
        { label: "Asia/Chungking", value: "Asia/Chungking" },
        { label: "Asia/Colombo", value: "Asia/Colombo" },
        { label: "Asia/Dacca", value: "Asia/Dacca" },
        { label: "Asia/Damascus", value: "Asia/Damascus" },
        { label: "Asia/Dhaka", value: "Asia/Dhaka" },
        { label: "Asia/Dili", value: "Asia/Dili" },
        { label: "Asia/Dubai", value: "Asia/Dubai" },
        { label: "Asia/Dushanbe", value: "Asia/Dushanbe" },
        { label: "Asia/Famagusta", value: "Asia/Famagusta" },
        { label: "Asia/Gaza", value: "Asia/Gaza" },
        { label: "Asia/Harbin", value: "Asia/Harbin" },
        { label: "Asia/Hebron", value: "Asia/Hebron" },
        { label: "Asia/Ho_Chi_Minh", value: "Asia/Ho_Chi_Minh" },
        { label: "Asia/Hong_Kong", value: "Asia/Hong_Kong" },
        { label: "Asia/Hovd", value: "Asia/Hovd" },
        { label: "Asia/Irkutsk", value: "Asia/Irkutsk" },
        { label: "Asia/Istanbul", value: "Asia/Istanbul" },
        { label: "Asia/Jakarta", value: "Asia/Jakarta" },
        { label: "Asia/Jayapura", value: "Asia/Jayapura" },
        { label: "Asia/Jerusalem", value: "Asia/Jerusalem" },
        { label: "Asia/Kabul", value: "Asia/Kabul" },
        { label: "Asia/Kamchatka", value: "Asia/Kamchatka" },
        { label: "Asia/Karachi", value: "Asia/Karachi" },
        { label: "Asia/Kashgar", value: "Asia/Kashgar" },
        { label: "Asia/Kathmandu", value: "Asia/Kathmandu" },
        { label: "Asia/Katmandu", value: "Asia/Katmandu" },
        { label: "Asia/Khandyga", value: "Asia/Khandyga" },
        { label: "Asia/Kolkata", value: "Asia/Kolkata" },
        { label: "Asia/Krasnoyarsk", value: "Asia/Krasnoyarsk" },
        { label: "Asia/Kuala_Lumpur", value: "Asia/Kuala_Lumpur" },
        { label: "Asia/Kuching", value: "Asia/Kuching" },
        { label: "Asia/Kuwait", value: "Asia/Kuwait" },
        { label: "Asia/Macao", value: "Asia/Macao" },
        { label: "Asia/Macau", value: "Asia/Macau" },
        { label: "Asia/Magadan", value: "Asia/Magadan" },
        { label: "Asia/Makassar", value: "Asia/Makassar" },
        { label: "Asia/Manila", value: "Asia/Manila" },
        { label: "Asia/Muscat", value: "Asia/Muscat" },
        { label: "Asia/Nicosia", value: "Asia/Nicosia" },
        { label: "Asia/Novokuznetsk", value: "Asia/Novokuznetsk" },
        { label: "Asia/Novosibirsk", value: "Asia/Novosibirsk" },
        { label: "Asia/Omsk", value: "Asia/Omsk" },
        { label: "Asia/Oral", value: "Asia/Oral" },
        { label: "Asia/Phnom_Penh", value: "Asia/Phnom_Penh" },
        { label: "Asia/Pontianak", value: "Asia/Pontianak" },
        { label: "Asia/Pyongyang", value: "Asia/Pyongyang" },
        { label: "Asia/Qatar", value: "Asia/Qatar" },
        { label: "Asia/Qostanay", value: "Asia/Qostanay" },
        { label: "Asia/Qyzylorda", value: "Asia/Qyzylorda" },
        { label: "Asia/Rangoon", value: "Asia/Rangoon" },
        { label: "Asia/Riyadh", value: "Asia/Riyadh" },
        { label: "Asia/Saigon", value: "Asia/Saigon" },
        { label: "Asia/Sakhalin", value: "Asia/Sakhalin" },
        { label: "Asia/Samarkand", value: "Asia/Samarkand" },
        { label: "Asia/Seoul", value: "Asia/Seoul" },
        { label: "Asia/Shanghai", value: "Asia/Shanghai" },
        { label: "Asia/Singapore", value: "Asia/Singapore" },
        { label: "Asia/Srednekolymsk", value: "Asia/Srednekolymsk" },
        { label: "Asia/Taipei", value: "Asia/Taipei" },
        { label: "Asia/Tashkent", value: "Asia/Tashkent" },
        { label: "Asia/Tbilisi", value: "Asia/Tbilisi" },
        { label: "Asia/Tehran", value: "Asia/Tehran" },
        { label: "Asia/Tel_Aviv", value: "Asia/Tel_Aviv" },
        { label: "Asia/Thimbu", value: "Asia/Thimbu" },
        { label: "Asia/Thimphu", value: "Asia/Thimphu" },
        { label: "Asia/Tokyo", value: "Asia/Tokyo" },
        { label: "Asia/Tomsk", value: "Asia/Tomsk" },
        { label: "Asia/Ujung_Pandang", value: "Asia/Ujung_Pandang" },
        { label: "Asia/Ulaanbaatar", value: "Asia/Ulaanbaatar" },
        { label: "Asia/Ulan_Bator", value: "Asia/Ulan_Bator" },
        { label: "Asia/Urumqi", value: "Asia/Urumqi" },
        { label: "Asia/Ust-Nera", value: "Asia/Ust-Nera" },
        { label: "Asia/Vientiane", value: "Asia/Vientiane" },
        { label: "Asia/Vladivostok", value: "Asia/Vladivostok" },
        { label: "Asia/Yakutsk", value: "Asia/Yakutsk" },
        { label: "Asia/Yangon", value: "Asia/Yangon" },
        { label: "Asia/Yekaterinburg", value: "Asia/Yekaterinburg" },
        { label: "Asia/Yerevan", value: "Asia/Yerevan" },
        { label: "Atlantic/Azores", value: "Atlantic/Azores" },
        { label: "Atlantic/Bermuda", value: "Atlantic/Bermuda" },
        { label: "Atlantic/Canary", value: "Atlantic/Canary" },
        { label: "Atlantic/Cape_Verde", value: "Atlantic/Cape_Verde" },
        { label: "Atlantic/Faeroe", value: "Atlantic/Faeroe" },
        { label: "Atlantic/Faroe", value: "Atlantic/Faroe" },
        { label: "Atlantic/Jan_Mayen", value: "Atlantic/Jan_Mayen" },
        { label: "Atlantic/Madeira", value: "Atlantic/Madeira" },
        { label: "Atlantic/Reykjavik", value: "Atlantic/Reykjavik" },
        { label: "Atlantic/South_Georgia", value: "Atlantic/South_Georgia" },
        { label: "Atlantic/St_Helena", value: "Atlantic/St_Helena" },
        { label: "Atlantic/Stanley", value: "Atlantic/Stanley" },
        { label: "Australia/ACT", value: "Australia/ACT" },
        { label: "Australia/Adelaide", value: "Australia/Adelaide" },
        { label: "Australia/Brisbane", value: "Australia/Brisbane" },
        { label: "Australia/Broken_Hill", value: "Australia/Broken_Hill" },
        { label: "Australia/Canberra", value: "Australia/Canberra" },
        { label: "Australia/Currie", value: "Australia/Currie" },
        { label: "Australia/Darwin", value: "Australia/Darwin" },
        { label: "Australia/Eucla", value: "Australia/Eucla" },
        { label: "Australia/Hobart", value: "Australia/Hobart" },
        { label: "Australia/LHI", value: "Australia/LHI" },
        { label: "Australia/Lindeman", value: "Australia/Lindeman" },
        { label: "Australia/Lord_Howe", value: "Australia/Lord_Howe" },
        { label: "Australia/Melbourne", value: "Australia/Melbourne" },
        { label: "Australia/NSW", value: "Australia/NSW" },
        { label: "Australia/North", value: "Australia/North" },
        { label: "Australia/Perth", value: "Australia/Perth" },
        { label: "Australia/Queensland", value: "Australia/Queensland" },
        { label: "Australia/South", value: "Australia/South" },
        { label: "Australia/Sydney", value: "Australia/Sydney" },
        { label: "Australia/Tasmania", value: "Australia/Tasmania" },
        { label: "Australia/Victoria", value: "Australia/Victoria" },
        { label: "Australia/West", value: "Australia/West" },
        { label: "Australia/Yancowinna", value: "Australia/Yancowinna" },
        { label: "Brazil/Acre", value: "Brazil/Acre" },
        { label: "Brazil/DeNoronha", value: "Brazil/DeNoronha" },
        { label: "Brazil/East", value: "Brazil/East" },
        { label: "Brazil/West", value: "Brazil/West" },
        { label: "CET", value: "CET" },
        { label: "CST6CDT", value: "CST6CDT" },
        { label: "Canada/Atlantic", value: "Canada/Atlantic" },
        { label: "Canada/Central", value: "Canada/Central" },
        { label: "Canada/Eastern", value: "Canada/Eastern" },
        { label: "Canada/Mountain", value: "Canada/Mountain" },
        { label: "Canada/Newfoundland", value: "Canada/Newfoundland" },
        { label: "Canada/Pacific", value: "Canada/Pacific" },
        { label: "Canada/Saskatchewan", value: "Canada/Saskatchewan" },
        { label: "Canada/Yukon", value: "Canada/Yukon" },
        { label: "Chile/Continental", value: "Chile/Continental" },
        { label: "Chile/EasterIsland", value: "Chile/EasterIsland" },
        { label: "Cuba", value: "Cuba" },
        { label: "EET", value: "EET" },
        { label: "EST", value: "EST" },
        { label: "EST5EDT", value: "EST5EDT" },
        { label: "Egypt", value: "Egypt" },
        { label: "Eire", value: "Eire" },
        { label: "Etc/GMT", value: "Etc/GMT" },
        { label: "Etc/GMT+0", value: "Etc/GMT+0" },
        { label: "Etc/GMT+1", value: "Etc/GMT+1" },
        { label: "Etc/GMT+10", value: "Etc/GMT+10" },
        { label: "Etc/GMT+11", value: "Etc/GMT+11" },
        { label: "Etc/GMT+12", value: "Etc/GMT+12" },
        { label: "Etc/GMT+2", value: "Etc/GMT+2" },
        { label: "Etc/GMT+3", value: "Etc/GMT+3" },
        { label: "Etc/GMT+4", value: "Etc/GMT+4" },
        { label: "Etc/GMT+5", value: "Etc/GMT+5" },
        { label: "Etc/GMT+6", value: "Etc/GMT+6" },
        { label: "Etc/GMT+7", value: "Etc/GMT+7" },
        { label: "Etc/GMT+8", value: "Etc/GMT+8" },
        { label: "Etc/GMT+9", value: "Etc/GMT+9" },
        { label: "Etc/GMT-0", value: "Etc/GMT-0" },
        { label: "Etc/GMT-1", value: "Etc/GMT-1" },
        { label: "Etc/GMT-10", value: "Etc/GMT-10" },
        { label: "Etc/GMT-11", value: "Etc/GMT-11" },
        { label: "Etc/GMT-12", value: "Etc/GMT-12" },
        { label: "Etc/GMT-13", value: "Etc/GMT-13" },
        { label: "Etc/GMT-14", value: "Etc/GMT-14" },
        { label: "Etc/GMT-2", value: "Etc/GMT-2" },
        { label: "Etc/GMT-3", value: "Etc/GMT-3" },
        { label: "Etc/GMT-4", value: "Etc/GMT-4" },
        { label: "Etc/GMT-5", value: "Etc/GMT-5" },
        { label: "Etc/GMT-6", value: "Etc/GMT-6" },
        { label: "Etc/GMT-7", value: "Etc/GMT-7" },
        { label: "Etc/GMT-8", value: "Etc/GMT-8" },
        { label: "Etc/GMT-9", value: "Etc/GMT-9" },
        { label: "Etc/GMT0", value: "Etc/GMT0" },
        { label: "Etc/Greenwich", value: "Etc/Greenwich" },
        { label: "Etc/UCT", value: "Etc/UCT" },
        { label: "Etc/UTC", value: "Etc/UTC" },
        { label: "Etc/Universal", value: "Etc/Universal" },
        { label: "Etc/Zulu", value: "Etc/Zulu" },
        { label: "Europe/Amsterdam", value: "Europe/Amsterdam" },
        { label: "Europe/Andorra", value: "Europe/Andorra" },
        { label: "Europe/Astrakhan", value: "Europe/Astrakhan" },
        { label: "Europe/Athens", value: "Europe/Athens" },
        { label: "Europe/Belfast", value: "Europe/Belfast" },
        { label: "Europe/Belgrade", value: "Europe/Belgrade" },
        { label: "Europe/Berlin", value: "Europe/Berlin" },
        { label: "Europe/Bratislava", value: "Europe/Bratislava" },
        { label: "Europe/Brussels", value: "Europe/Brussels" },
        { label: "Europe/Bucharest", value: "Europe/Bucharest" },
        { label: "Europe/Budapest", value: "Europe/Budapest" },
        { label: "Europe/Busingen", value: "Europe/Busingen" },
        { label: "Europe/Chisinau", value: "Europe/Chisinau" },
        { label: "Europe/Copenhagen", value: "Europe/Copenhagen" },
        { label: "Europe/Dublin", value: "Europe/Dublin" },
        { label: "Europe/Gibraltar", value: "Europe/Gibraltar" },
        { label: "Europe/Guernsey", value: "Europe/Guernsey" },
        { label: "Europe/Helsinki", value: "Europe/Helsinki" },
        { label: "Europe/Isle_of_Man", value: "Europe/Isle_of_Man" },
        { label: "Europe/Istanbul", value: "Europe/Istanbul" },
        { label: "Europe/Jersey", value: "Europe/Jersey" },
        { label: "Europe/Kaliningrad", value: "Europe/Kaliningrad" },
        { label: "Europe/Kiev", value: "Europe/Kiev" },
        { label: "Europe/Kirov", value: "Europe/Kirov" },
        { label: "Europe/Kyiv", value: "Europe/Kyiv" },
        { label: "Europe/Lisbon", value: "Europe/Lisbon" },
        { label: "Europe/Ljubljana", value: "Europe/Ljubljana" },
        { label: "Europe/London", value: "Europe/London" },
        { label: "Europe/Luxembourg", value: "Europe/Luxembourg" },
        { label: "Europe/Madrid", value: "Europe/Madrid" },
        { label: "Europe/Malta", value: "Europe/Malta" },
        { label: "Europe/Mariehamn", value: "Europe/Mariehamn" },
        { label: "Europe/Minsk", value: "Europe/Minsk" },
        { label: "Europe/Monaco", value: "Europe/Monaco" },
        { label: "Europe/Moscow", value: "Europe/Moscow" },
        { label: "Europe/Nicosia", value: "Europe/Nicosia" },
        { label: "Europe/Oslo", value: "Europe/Oslo" },
        { label: "Europe/Paris", value: "Europe/Paris" },
        { label: "Europe/Podgorica", value: "Europe/Podgorica" },
        { label: "Europe/Prague", value: "Europe/Prague" },
        { label: "Europe/Riga", value: "Europe/Riga" },
        { label: "Europe/Rome", value: "Europe/Rome" },
        { label: "Europe/Samara", value: "Europe/Samara" },
        { label: "Europe/San_Marino", value: "Europe/San_Marino" },
        { label: "Europe/Sarajevo", value: "Europe/Sarajevo" },
        { label: "Europe/Saratov", value: "Europe/Saratov" },
        { label: "Europe/Simferopol", value: "Europe/Simferopol" },
        { label: "Europe/Skopje", value: "Europe/Skopje" },
        { label: "Europe/Sofia", value: "Europe/Sofia" },
        { label: "Europe/Stockholm", value: "Europe/Stockholm" },
        { label: "Europe/Tallinn", value: "Europe/Tallinn" },
        { label: "Europe/Tirane", value: "Europe/Tirane" },
        { label: "Europe/Tiraspol", value: "Europe/Tiraspol" },
        { label: "Europe/Ulyanovsk", value: "Europe/Ulyanovsk" },
        { label: "Europe/Uzhgorod", value: "Europe/Uzhgorod" },
        { label: "Europe/Vaduz", value: "Europe/Vaduz" },
        { label: "Europe/Vatican", value: "Europe/Vatican" },
        { label: "Europe/Vienna", value: "Europe/Vienna" },
        { label: "Europe/Vilnius", value: "Europe/Vilnius" },
        { label: "Europe/Volgograd", value: "Europe/Volgograd" },
        { label: "Europe/Warsaw", value: "Europe/Warsaw" },
        { label: "Europe/Zagreb", value: "Europe/Zagreb" },
        { label: "Europe/Zaporozhye", value: "Europe/Zaporozhye" },
        { label: "Europe/Zurich", value: "Europe/Zurich" },
        { label: "GB", value: "GB" },
        { label: "GB-Eire", value: "GB-Eire" },
        { label: "GMT", value: "GMT" },
        { label: "GMT+0", value: "GMT+0" },
        { label: "GMT-0", value: "GMT-0" },
        { label: "GMT0", value: "GMT0" },
        { label: "Greenwich", value: "Greenwich" },
        { label: "HST", value: "HST" },
        { label: "Hongkong", value: "Hongkong" },
        { label: "Iceland", value: "Iceland" },
        { label: "Indian/Antananarivo", value: "Indian/Antananarivo" },
        { label: "Indian/Chagos", value: "Indian/Chagos" },
        { label: "Indian/Christmas", value: "Indian/Christmas" },
        { label: "Indian/Cocos", value: "Indian/Cocos" },
        { label: "Indian/Comoro", value: "Indian/Comoro" },
        { label: "Indian/Kerguelen", value: "Indian/Kerguelen" },
        { label: "Indian/Mahe", value: "Indian/Mahe" },
        { label: "Indian/Maldives", value: "Indian/Maldives" },
        { label: "Indian/Mauritius", value: "Indian/Mauritius" },
        { label: "Indian/Mayotte", value: "Indian/Mayotte" },
        { label: "Indian/Reunion", value: "Indian/Reunion" },
        { label: "Iran", value: "Iran" },
        { label: "Israel", value: "Israel" },
        { label: "Jamaica", value: "Jamaica" },
        { label: "Japan", value: "Japan" },
        { label: "Kwajalein", value: "Kwajalein" },
        { label: "Libya", value: "Libya" },
        { label: "MET", value: "MET" },
        { label: "MST", value: "MST" },
        { label: "MST7MDT", value: "MST7MDT" },
        { label: "Mexico/BajaNorte", value: "Mexico/BajaNorte" },
        { label: "Mexico/BajaSur", value: "Mexico/BajaSur" },
        { label: "Mexico/General", value: "Mexico/General" },
        { label: "NZ", value: "NZ" },
        { label: "NZ-CHAT", value: "NZ-CHAT" },
        { label: "Navajo", value: "Navajo" },
        { label: "PRC", value: "PRC" },
        { label: "PST8PDT", value: "PST8PDT" },
        { label: "Pacific/Apia", value: "Pacific/Apia" },
        { label: "Pacific/Auckland", value: "Pacific/Auckland" },
        { label: "Pacific/Bougainville", value: "Pacific/Bougainville" },
        { label: "Pacific/Chatham", value: "Pacific/Chatham" },
        { label: "Pacific/Chuuk", value: "Pacific/Chuuk" },
        { label: "Pacific/Easter", value: "Pacific/Easter" },
        { label: "Pacific/Efate", value: "Pacific/Efate" },
        { label: "Pacific/Enderbury", value: "Pacific/Enderbury" },
        { label: "Pacific/Fakaofo", value: "Pacific/Fakaofo" },
        { label: "Pacific/Fiji", value: "Pacific/Fiji" },
        { label: "Pacific/Funafuti", value: "Pacific/Funafuti" },
        { label: "Pacific/Galapagos", value: "Pacific/Galapagos" },
        { label: "Pacific/Gambier", value: "Pacific/Gambier" },
        { label: "Pacific/Guadalcanal", value: "Pacific/Guadalcanal" },
        { label: "Pacific/Guam", value: "Pacific/Guam" },
        { label: "Pacific/Honolulu", value: "Pacific/Honolulu" },
        { label: "Pacific/Johnston", value: "Pacific/Johnston" },
        { label: "Pacific/Kanton", value: "Pacific/Kanton" },
        { label: "Pacific/Kiritimati", value: "Pacific/Kiritimati" },
        { label: "Pacific/Kosrae", value: "Pacific/Kosrae" },
        { label: "Pacific/Kwajalein", value: "Pacific/Kwajalein" },
        { label: "Pacific/Majuro", value: "Pacific/Majuro" },
        { label: "Pacific/Marquesas", value: "Pacific/Marquesas" },
        { label: "Pacific/Midway", value: "Pacific/Midway" },
        { label: "Pacific/Nauru", value: "Pacific/Nauru" },
        { label: "Pacific/Niue", value: "Pacific/Niue" },
        { label: "Pacific/Norfolk", value: "Pacific/Norfolk" },
        { label: "Pacific/Noumea", value: "Pacific/Noumea" },
        { label: "Pacific/Pago_Pago", value: "Pacific/Pago_Pago" },
        { label: "Pacific/Palau", value: "Pacific/Palau" },
        { label: "Pacific/Pitcairn", value: "Pacific/Pitcairn" },
        { label: "Pacific/Pohnpei", value: "Pacific/Pohnpei" },
        { label: "Pacific/Ponape", value: "Pacific/Ponape" },
        { label: "Pacific/Port_Moresby", value: "Pacific/Port_Moresby" },
        { label: "Pacific/Rarotonga", value: "Pacific/Rarotonga" },
        { label: "Pacific/Saipan", value: "Pacific/Saipan" },
        { label: "Pacific/Samoa", value: "Pacific/Samoa" },
        { label: "Pacific/Tahiti", value: "Pacific/Tahiti" },
        { label: "Pacific/Tarawa", value: "Pacific/Tarawa" },
        { label: "Pacific/Tongatapu", value: "Pacific/Tongatapu" },
        { label: "Pacific/Truk", value: "Pacific/Truk" },
        { label: "Pacific/Wake", value: "Pacific/Wake" },
        { label: "Pacific/Wallis", value: "Pacific/Wallis" },
        { label: "Pacific/Yap", value: "Pacific/Yap" },
        { label: "Poland", value: "Poland" },
        { label: "Portugal", value: "Portugal" },
        { label: "ROC", value: "ROC" },
        { label: "ROK", value: "ROK" },
        { label: "Singapore", value: "Singapore" },
        { label: "Turkey", value: "Turkey" },
        { label: "UCT", value: "UCT" },
        { label: "US/Alaska", value: "US/Alaska" },
        { label: "US/Aleutian", value: "US/Aleutian" },
        { label: "US/Arizona", value: "US/Arizona" },
        { label: "US/Central", value: "US/Central" },
        { label: "US/East-Indiana", value: "US/East-Indiana" },
        { label: "US/Eastern", value: "US/Eastern" },
        { label: "US/Hawaii", value: "US/Hawaii" },
        { label: "US/Indiana-Starke", value: "US/Indiana-Starke" },
        { label: "US/Michigan", value: "US/Michigan" },
        { label: "US/Mountain", value: "US/Mountain" },
        { label: "US/Pacific", value: "US/Pacific" },
        { label: "US/Samoa", value: "US/Samoa" },
        { label: "UTC", value: "UTC" },
        { label: "Universal", value: "Universal" },
        { label: "W-SU", value: "W-SU" },
        { label: "WET", value: "WET" },
        { label: "Zulu", value: "Zulu" }
      ],
      default: { label: "UTC", value: "UTC" }
    },
    parse: (value) => value,
    getVisible: (input) => {
      return [
        "current_date_iso",
        "current_time_iso",
        "current_datetime_iso",
        "unix_timestamp_seconds",
        "unix_timestamp_ms",
        "day_of_week",
        "day_of_week_name",
        "month_number",
        "month_name",
        "year",
        "hour",
        "minute",
        "second"
      ].includes(input.constantType);
    }
  }
}, "outputSchema": {
  value: {
    name: "Value",
    description: "The constant value",
    example: "2023-05-17T10:30:00.000Z",
    validator: () => true,
    required: true
  }
}, "groups": ["Utilities"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/send_direct_mail.ts
var node41 = { "name": "Send Direct Mail", "id": "send_direct_mail", "descripition": "Sends a physical direct mail using a service provider", "inputSchema": {
  productId: {
    name: "Product ID",
    description: "ID of the physical mail product to send",
    validationSchema: /.+/,
    errorMessage: "Product ID cannot be empty",
    required: true,
    input: {
      type: "custom",
      tag: "direct-mail-product-selector"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  handwritingStyle: {
    name: "Handwriting Style",
    description: "Style of handwriting to use for the letter",
    validationSchema: /.+/,
    errorMessage: "Handwriting style cannot be empty",
    required: true,
    input: {
      type: "custom",
      tag: "handwriting-style-selector"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  customMessage: {
    name: "Custom Message",
    description: "The message content for the direct mail",
    validationSchema: /.+/,
    errorMessage: "Message content cannot be empty",
    required: true,
    input: {
      type: "custom",
      tag: "font-target-textarea"
    },
    parse: function(value) {
      return value;
    }
  },
  signoff: {
    name: "Signoff",
    description: "Optional message signoff (e.g., 'Best regards')",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid signoff",
    required: true,
    input: {
      type: "custom",
      tag: "font-target-textarea"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  shippingDate: {
    name: "Shipping Date",
    description: "Optional requested shipping date (YYYY-MM-DD)",
    validationSchema: /^$|^\d{4}-\d{2}-\d{2}$/,
    errorMessage: "Please use YYYY-MM-DD format for date",
    required: false,
    input: {
      type: "text",
      placeholder: "2023-12-25",
      default: "01/01/2020"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  returnAddressName: {
    name: "Return Address Name",
    description: "Name for the return address",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid name",
    required: true,
    input: {
      type: "text",
      placeholder: "John Doe"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  returnAddress: {
    name: "Return Address",
    description: "Street address for return",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid address",
    required: true,
    input: {
      type: "text",
      placeholder: "123 Main St"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  returnAddress2: {
    name: "Return Address Line 2",
    description: "Additional address information for return",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid address",
    required: false,
    input: {
      type: "text",
      placeholder: "Apt 4B"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  returnAddressCity: {
    name: "Return Address City",
    description: "City for the return address",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid city",
    required: true,
    input: {
      type: "text",
      placeholder: "San Francisco"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  returnAddressState: {
    name: "Return Address State",
    description: "State/province for the return address",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid state",
    required: true,
    input: {
      type: "text",
      placeholder: "CA"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  returnAddressZip: {
    name: "Return Address ZIP",
    description: "ZIP/Postal code for the return address",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid ZIP code",
    required: true,
    input: {
      type: "text",
      placeholder: "94103"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  returnAddressCountry: {
    name: "Return Address Country",
    description: "Country for the return address",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid country",
    required: true,
    input: {
      type: "text",
      placeholder: "USA"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientFirstName: {
    name: "Recipient First Name",
    description: "First name of the recipient",
    validationSchema: /.+/,
    errorMessage: "First name cannot be empty",
    required: true,
    input: {
      type: "text",
      placeholder: "John"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientLastName: {
    name: "Recipient Last Name",
    description: "Last name of the recipient",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid last name",
    required: true,
    input: {
      type: "text",
      placeholder: "Smith"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientEmail: {
    name: "Recipient Email",
    description: "Email address of the recipient",
    validationSchema: /^$|^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    errorMessage: "Invalid email format",
    required: false,
    input: {
      type: "text",
      placeholder: "recipient@example.com"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientPhone: {
    name: "Recipient Phone",
    description: "Phone number of the recipient",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid phone number",
    required: false,
    input: {
      type: "text",
      placeholder: "+1 555-123-4567"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientAddress: {
    name: "Recipient Address",
    description: "Street address of the recipient",
    validationSchema: /.+/,
    errorMessage: "Address cannot be empty",
    required: true,
    input: {
      type: "text",
      placeholder: "456 Oak St"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientAddress2: {
    name: "Recipient Address Line 2",
    description: "Additional address information for the recipient",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid address",
    required: false,
    input: {
      type: "text",
      placeholder: "Suite 7C"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientCity: {
    name: "Recipient City",
    description: "City of the recipient",
    validationSchema: /.+/,
    errorMessage: "City cannot be empty",
    required: true,
    input: {
      type: "text",
      placeholder: "Chicago"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientState: {
    name: "Recipient State",
    description: "State/province of the recipient",
    validationSchema: /.+/,
    errorMessage: "State cannot be empty",
    required: true,
    input: {
      type: "text",
      placeholder: "IL"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientCountry: {
    name: "Recipient Country",
    description: "Country of the recipient",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid country",
    required: true,
    input: {
      type: "text",
      placeholder: "USA"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientZip: {
    name: "Recipient ZIP",
    description: "ZIP/Postal code of the recipient",
    validationSchema: /.+/,
    errorMessage: "ZIP code cannot be empty",
    required: true,
    input: {
      type: "text",
      placeholder: "60601"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientCompany: {
    name: "Recipient Company",
    description: "Company name of the recipient",
    validationSchema: /^.*$/,
    errorMessage: "Please enter a valid company name",
    required: false,
    input: {
      type: "text",
      placeholder: "ACME Inc."
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientCustom1: {
    name: "Recipient Custom Field 1",
    description: "First custom field for recipient data",
    validationSchema: /^.*$/,
    errorMessage: "Please enter valid text",
    required: false,
    input: {
      type: "text",
      placeholder: "Custom data 1"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientCustom2: {
    name: "Recipient Custom Field 2",
    description: "Second custom field for recipient data",
    validationSchema: /^.*$/,
    errorMessage: "Please enter valid text",
    required: false,
    input: {
      type: "text",
      placeholder: "Custom data 2"
    },
    parse: function(value) {
      return value.trim();
    }
  },
  recipientCustom3: {
    name: "Recipient Custom Field 3",
    description: "Third custom field for recipient data",
    validationSchema: /^.*$/,
    errorMessage: "Please enter valid text",
    required: false,
    input: {
      type: "text",
      placeholder: "Custom data 3"
    },
    parse: function(value) {
      return value.trim();
    }
  }
}, "outputSchema": {}, "groups": ["Communication", "Direct Mail"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 7.5 };

// src/manual_trigger.ts
var node42 = { "name": "Manual Trigger", "id": "manual_trigger", "descripition": "A description for ManualTrigger", "inputSchema": {}, "outputSchema": {
  phone: {
    name: "Phone Number",
    description: "The phone number to send notifications to",
    required: false,
    example: "+1234567890",
    validator: (value) => {
      const phoneRegex = /^\+?[1-9]\d{1,14}$/;
      return phoneRegex.test(value);
    }
  },
  extraInfo: {
    name: "Extra Information",
    description: "Any extra information to pass along",
    required: false,
    example: "",
    validator: (value) => true
  }
}, "groups": ["Advanced", "Triggers"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/run_another_workflow.ts
var node43 = { "name": "Run Another Workflow", "id": "run_another_workflow", "descripition": "A description for RunAnotherWorkflow", "inputSchema": {
  workflowCode: {
    name: "Workflow Code",
    description: "The unique code of the workflow to run, check ManualTrigger node on the target workflow for the code",
    validationSchema: /.*/,
    errorMessage: "Please enter a valid workflow Code",
    required: true,
    input: {
      type: "text",
      placeholder: "Enter workflow Code"
    },
    parse: function(value) {
      return value;
    }
  },
  phone: {
    name: "Phone Number",
    description: "The phone number to send notifications to",
    validationSchema: /^\+?[1-9]\d{1,14}$/,
    errorMessage: "Please enter a valid phone number in E.164 format",
    required: false,
    input: {
      type: "text",
      placeholder: "Enter phone number (optional)"
    },
    parse: function(value) {
      return value;
    }
  },
  extraInfo: {
    name: "Extra Information",
    description: "Any additional information to include",
    validationSchema: /.*/,
    errorMessage: "",
    required: false,
    input: {
      type: "text",
      placeholder: "Enter extra information (optional)"
    },
    parse: function(value) {
      return value;
    }
  }
}, "outputSchema": {}, "groups": ["Advanced"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/get_live_staging_leads.ts
var node44 = { "name": "Get Live Staging Leads", "id": "get_live_staging_leads", "descripition": "A description for GetLiveStagingLeads", "inputSchema": {
  type: {
    name: "Lead Type",
    description: "Type of leads to retrieve",
    validationSchema: /^(City|ZipCode)$/,
    errorMessage: "Please select a valid lead type",
    required: true,
    getVisible: void 0,
    input: {
      type: "select",
      options: [
        { label: "City", value: "City" },
        { label: "Zip Code", value: "ZipCode" }
      ],
      default: { label: "City", value: "City" }
    },
    parse: function(value) {
      if (value === "City" || value === "ZipCode") {
        return value;
      }
      return "City";
    }
  },
  cities: {
    name: "Cities",
    description: "List of cities to filter leads by, seperated by commas",
    validationSchema: /^.*$/,
    errorMessage: "Invalid cities format",
    required: false,
    getVisible: (data) => data.type === "City",
    input: {
      type: "text"
    },
    parse: function(value) {
      return value.split(",").map((city) => city.trim()).map((city) => city.toUpperCase());
    }
  },
  zipCodes: {
    name: "Zip Codes",
    description: "Zip Codes to filter leads by, seperated by commas",
    validationSchema: /^(\d{5})(,\s*\d{5})*$/,
    errorMessage: "Invalid zip codes format",
    required: false,
    getVisible: (data) => data.type === "ZipCode",
    input: {
      type: "text"
    },
    parse: function(value) {
      return value.split(",").map((zip) => zip.trim());
    }
  },
  category: {
    name: "Category",
    description: "Lead category to filter by",
    validationSchema: /^.*$/,
    errorMessage: "Invalid category format",
    required: false,
    input: {
      type: "select",
      options: [
        { label: "New Movers", value: "NEW_MOVERS" },
        { label: "Pre Movers", value: "PRE_MOVERS" },
        { label: "New Home Owners", value: "NEW_HOME_OWNERS" },
        { label: "New Parents", value: "NEW_PARENTS" },
        { label: "New Married", value: "NEW_MARRIED" }
      ],
      default: { label: "New Movers", value: "NEW_MOVERS" }
    },
    parse: function(value) {
      if ([
        "NEW_MOVERS",
        "PRE_MOVERS",
        "NEW_HOME_OWNERS",
        "NEW_PARENTS",
        "NEW_MARRIED"
      ].includes(value)) {
        return value;
      }
      return "NEW_MOVERS";
    }
  },
  maxLeads: {
    name: "Max Leads",
    description: "Maximum number of leads to retrieve",
    validationSchema: /^\d+$/,
    errorMessage: "Please enter a valid number less than or equal to 1000",
    required: false,
    input: {
      type: "number",
      min: 1,
      max: 1e3,
      step: 1,
      default: 100
    },
    parse: function(value) {
      const parsed = parseInt(value, 10);
      return isNaN(parsed) ? 100 : parsed;
    }
  }
}, "outputSchema": {
  firstName: {
    name: "First Name",
    description: "The first name of the person",
    example: "John",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  lastName: {
    name: "Last Name",
    description: "The last name of the person",
    example: "Doe",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  email: {
    name: "Email",
    description: "Email address of the person",
    example: "john.doe@example.com",
    validator: function(value) {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return typeof value === "string" && emailRegex.test(value);
    }
  },
  phone: {
    name: "Phone Number",
    description: "Contact phone number",
    example: "+15551234567",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  street_address: {
    name: "Street Address",
    description: "The street address of the person",
    example: "123 Main St",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  apartment_suite: {
    name: "Apartment/Suite",
    description: "The apartment or suite number",
    example: "Apt 4B",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  city: {
    name: "City",
    description: "The city of the person's address",
    example: "New York",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  state: {
    name: "State",
    description: "The state of the person's address",
    example: "NY",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  zip_code: {
    name: "Zip Code",
    description: "The zip code of the person's address",
    example: "10001",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  country: {
    name: "Country",
    description: "The country of the person's address",
    example: "USA",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  website: {
    name: "Website",
    description: "The person's website",
    example: "https://example.com",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  social_links: {
    name: "Social Links",
    description: "Links to the person's social media profiles",
    example: "https://linkedin.com/in/johndoe",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  birth_date: {
    name: "Birth Date",
    description: "The person's birth date",
    example: "1990-01-01",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  gender: {
    name: "Gender",
    description: "The person's gender",
    example: "Male",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  language: {
    name: "Language",
    description: "The person's preferred language",
    example: "English",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  industry: {
    name: "Industry",
    description: "The industry the person works in",
    example: "Technology",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  company_size: {
    name: "Company Size",
    description: "The size of the person's company",
    example: "51-200 employees",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  annual_revenue: {
    name: "Annual Revenue",
    description: "The annual revenue of the person's company",
    example: "$10M - $50M",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  department: {
    name: "Department",
    description: "The department the person works in",
    example: "Marketing",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  otherFields: {
    name: "Additional Information",
    description: "Any other information provided by the webhook",
    example: { company: "Acme Inc", role: "Manager" },
    validator: function(value) {
      return typeof value === "object" && value !== null;
    }
  }
}, "groups": ["Lead Generation", "Data Enrichment", "Trigger"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/get_service_titan_accounts_receievables.ts
var node45 = { "name": "Get Service Titan Unpaid Invoices", "id": "get_service_titan_accounts_receievables", "descripition": "Retrieves unpaid invoices from ServiceTitan that are past a specified number of days due.", "inputSchema": {
  daysPastDue: {
    name: "Days Past Due",
    description: "Number of days an invoice is past due",
    required: true,
    validationSchema: /^\d+$/,
    errorMessage: "Days Past Due must be a valid number",
    input: {
      type: "number",
      max: 2147483647,
      min: 0
    },
    parse: (value) => parseInt(value, 10)
  }
  // checkEveryNDays: {
  //   name: "Check Every N Days",
  //   description: "Frequency in days to check for unpaid invoices",
  //   required: true,
  //   validationSchema: /^\d+$/,
  //   errorMessage: "Check Every N Days must be a valid number",
  //   input: {
  //     type: "number",
  //     max: 2147483647,
  //     min: 1,
  //   },
  //   parse: (value: string) => parseInt(value, 10),
  // },
}, "outputSchema": {
  invoiceId: {
    name: "Invoice ID",
    description: "The ID of the unpaid invoice",
    example: "INV12345",
    validator: (value) => typeof value === "string"
  },
  customerId: {
    name: "Customer ID",
    description: "The ID of the customer associated with the invoice",
    example: "CUST67890",
    validator: (value) => typeof value === "string"
  },
  amountDue: {
    name: "Amount Due",
    description: "The total amount due on the invoice",
    example: 250.75,
    validator: (value) => typeof value === "number"
  },
  dueDate: {
    name: "Due Date",
    description: "The due date of the invoice",
    example: "2024-12-31",
    validator: (value) => typeof value === "string"
  },
  jobDescription: {
    name: "Job Description",
    description: "Description of the job associated with the invoice",
    example: "We went to the customer's location to fix the plumbing issue.",
    validator: (value) => typeof value === "string"
  },
  businessUnitId: {
    name: "Business Unit ID",
    description: "The ID of the business unit associated with the invoice",
    example: "BU123",
    validator: (value) => typeof value === "string"
  },
  employeeId: {
    name: "Employee ID",
    description: "The ID of the employee who created the invoice",
    example: "EMP456",
    validator: (value) => typeof value === "string"
  },
  itemsDescription: {
    name: "Items Description",
    description: "Description of the items or services on the invoice",
    example: "Plumbing repair, parts replacement",
    validator: (value) => typeof value === "string"
  }
}, "groups": ["ServiceTitan"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/get_service_titan_recurring_service_estimates.ts
var node46 = { "name": "Get Service Titan Recurring Service Estimates", "id": "get_service_titan_recurring_service_estimates", "descripition": "A description for GetServiceTitanRecurringServiceEstimates", "inputSchema": {}, "outputSchema": {}, "groups": ["ServiceTitan"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/check_if_invoice_overdue.ts
var node47 = { "name": "Check If Invoice Overdue", "id": "check_if_invoice_overdue", "descripition": "A description for CheckIfInvoiceOverdue", "inputSchema": {
  invoiceId: {
    name: "Invoice ID",
    description: "The ID of the invoice to check",
    required: true,
    validationSchema: /.*/,
    errorMessage: "Invoice ID is invalid",
    input: {
      type: "text"
    },
    parse: (value) => value
  },
  maxDaysOverdue: {
    name: "Max Days Overdue",
    description: "Maximum number of days an invoice can be overdue",
    required: true,
    validationSchema: /^\d+$/,
    errorMessage: "Max Days Overdue must be a valid number",
    input: {
      type: "number",
      max: 2147483647,
      min: 0
    },
    parse: (value) => parseInt(value, 10)
  }
}, "outputSchema": {
  result: {
    name: "Result",
    description: "Indicates if the invoice is overdue",
    example: true,
    validator: (value) => typeof value === "boolean"
  }
}, "groups": [], "branches": { "overdue": { "id": "overdue", "name": "Overdue", "description": "The invoice is overdue" }, "not_overdue": { "id": "not_overdue", "name": "Not Overdue", "description": "The invoice is not overdue" }, "invoice_not_found": { "id": "invoice_not_found", "name": "Invoice Not Found", "description": "The specified invoice was not found" } }, "isTriggerNode": false, "cost": 0 };

// src/get_unassigned_recurring_events.ts
var node48 = { "name": "Get Unassigned Recurring Events", "id": "get_unassigned_recurring_events", "descripition": "A description for GetUnassignedRecurringServiceEvents", "inputSchema": {
  nextNDays: {
    name: "Next N Days",
    description: "Number of days ahead to look for unassigned events",
    validationSchema: /^\d+$/,
    errorMessage: "Please enter a valid number of days.",
    input: {
      type: "number",
      min: 1,
      max: 365
    },
    parse: function(value) {
      return parseInt(value, 10);
    },
    required: true
  }
}, "outputSchema": {
  eventId: {
    name: "Event ID",
    description: "The unique identifier for the event",
    example: "evt_1234567890",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  serviceId: {
    name: "Service ID",
    description: "The unique identifier for the service",
    example: "svc_0987654321",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  serviceName: {
    name: "Service Name",
    description: "The name of the service",
    example: "Weekly Cleaning",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  eventName: {
    name: "Event Name",
    description: "The name of the event",
    example: "Monday Morning Clean",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  date: {
    name: "Date",
    description: "The date of the event",
    example: "2024-07-01T10:00:00Z",
    validator: function(value) {
      return !isNaN(Date.parse(value));
    }
  },
  memo: {
    name: "Memo",
    description: "Additional notes for the event",
    example: "Client prefers eco-friendly products",
    validator: function(value) {
      return typeof value === "string";
    }
  },
  jobSummary: {
    name: "Job Summary",
    description: "A brief summary of the job to be performed",
    example: "Clean kitchen, bathrooms, and living room",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  address: {
    name: "Address",
    description: "The address where the service will be performed",
    example: "123 Main St, Anytown, USA",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  },
  customerId: {
    name: "Customer ID",
    description: "The unique identifier for the customer",
    example: "cust_1122334455",
    validator: function(value) {
      return typeof value === "string" && value.length > 0;
    }
  }
}, "groups": [], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/extract_common_field.ts
var node49 = { "name": "Extract Common Field", "id": "extract_common_field", "descripition": "Extracts common fields like date, email, or phone number from text using predefined patterns.", "inputSchema": {
  rawText: {
    name: "Raw Text",
    description: "The text to extract information from",
    validationSchema: /.*/,
    errorMessage: "Raw text must be a string",
    required: true,
    input: {
      type: "textarea",
      maxLength: 1e4,
      minLength: 1,
      placeholder: "Enter the text to analyze"
    },
    parse: (value) => value
  },
  fieldType: {
    name: "Field Type",
    description: "The type of common field to extract",
    validationSchema: /^(date|email|phone|url|ip_address|number)$/,
    errorMessage: "Field type must be 'date', 'email', 'phone', 'url', 'ip_address', or 'number'",
    required: true,
    input: {
      type: "select",
      options: [
        { label: "Date", value: "date" },
        { label: "Email", value: "email" },
        { label: "Phone", value: "phone" },
        { label: "URL", value: "url" },
        // { label: "IP Address", value: "ip_address" },
        { label: "Number", value: "number" }
      ]
    },
    parse: (value) => value
  }
}, "outputSchema": {
  extractedData: {
    name: "Extracted Data",
    description: "The data extracted from the raw text, formatted consistently",
    example: "Extracted information",
    validator: (value) => typeof value === "string"
  }
}, "groups": ["Data"], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": false, "cost": 0 };

// src/service_titan_technicion_sms.ts
var node50 = { "name": "Service Titan Technicion Sms", "id": "service_titan_technicion_sms", "descripition": "This will trigger sending sms and follow up call to the technicion", "inputSchema": {}, "outputSchema": {
  firstPhoneNumber: {
    name: "First Phone Number",
    description: "First phone number of the technicion",
    example: "+11112223333",
    validator: function(value) {
      if (/^\+?[1-9]\d{1,14}$/.test(value)) {
        return true;
      } else {
        throw new Error("Please enter a valid phone number");
      }
    },
    required: true
  },
  secondPhoneNumber: {
    name: "Second Phone Number",
    description: "Second phone number of the technicion, use an empty string if not available",
    example: "+11112223333",
    validator: function(value) {
      if (value === "" || /^\+?[1-9]\d{1,14}$/.test(value)) {
        return true;
      } else {
        throw new Error(
          "Please enter a valid phone number or leave it empty"
        );
      }
    },
    required: true
  },
  message: {
    name: "SMS Message Content",
    description: "The content of the SMS message to be sent to the technicion",
    example: "You got a new job assigned. Please check your app for details.",
    validator: function(value) {
      if (value.length > 0 && value.length <= 1600) {
        return true;
      } else {
        throw new Error(
          "Please enter a valid message (maximum 1600 characters)"
        );
      }
    },
    required: false
  },
  action: {
    name: "Action",
    description: "initiated \u2014 send SMS; confirmed \u2014 SMS verified by technician.",
    example: "initiate",
    validator: function(value) {
      if (value === "initiate" || value === "confirmed") {
        return true;
      } else {
        throw new Error('Action must be either "initiate" or "confirmed"');
      }
    },
    required: true
  }
}, "groups": [], "branches": { "success": { "id": "success", "name": "Success", "description": "Successful execution" } }, "isTriggerNode": true, "cost": 0 };

// src/index.ts
var nodes = { make_call: node, waittime: node2, extract_with_a_i: node3, add_to_sms_campaign: node4, get_s_m_s_campaign_messages: node5, send_email_notification: node6, send_s_m_s_notification: node7, add_tag_to_lead: node8, remove_tag_from_lead: node9, get_tags: node10, checkcondition: node11, custom_webhook: node12, webhook_trigger: node13, inbound_call_trigger: node14, get_uploaded_leads_trigger: node15, on_tag_added: node16, run_once_trigger: node17, split_for_test: node18, store_variable: node19, get_variable: node20, on_website_vistor_indentified: node21, on_new_lead_service_titan: node22, on_new_job_service_titan: node23, on_new_invoice_service_titan: node24, on_new_estimate_service_titan: node25, on_new_customer_service_titan: node26, on_new_appoinment_service_titan: node27, on_new_job_or_project_note_service_titan: node28, on_new_lead_note_service_titan: node29, on_new_call_service_titan: node30, on_updated_call_service_titan: node31, on_updated_estimate_service_titan: node32, on_new_project_service_titan: node33, on_new_payment_service_titan: node34, apply_tag_service_titan: node35, add_note_to_lead_service_titan: node36, get_lead_service_titan: node37, on_email_received: node38, process_variable: node39, get_constant: node40, send_direct_mail: node41, manual_trigger: node42, run_another_workflow: node43, get_live_staging_leads: node44, get_service_titan_accounts_receievables: node45, get_service_titan_recurring_service_estimates: node46, check_if_invoice_overdue: node47, get_unassigned_recurring_events: node48, extract_common_field: node49, service_titan_technicion_sms: node50 };
export {
  nodes
};
