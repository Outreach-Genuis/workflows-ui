interface Lead {
    id?: string;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    street_address?: string;
    apartment_suite?: string;
    city?: string;
    state?: string;
    zip_code?: string;
    country?: string;
    website?: string;
    social_links?: string;
    birth_date?: string;
    gender?: string;
    language?: string;
    industry?: string;
    company_size?: string;
    annual_revenue?: string;
    department?: string;
    otherFields: Record<string, string>;
}

/**
 * This type represents a field in a schema with its associated properties and methods.
 * These fields are used to define the structure and validation of data in a schema.
 * This are also sent to the frontend to generate forms dynamically.
 */
type InputField<OutputType> = {
    name: string;
    description: string;
    validationSchema: RegExp;
    errorMessage: string;
    required?: boolean;
    getVisible?: (currentValues: Record<string, string>) => boolean;
    input: {
        type: "text";
        maxLength?: number;
        minLength?: number;
        placeholder?: string;
        default?: string;
    } | {
        type: "number";
        min: number;
        max: number;
        step?: number;
        default?: number;
    } | {
        type: "boolean";
        default?: boolean;
    } | {
        type: "password";
        default?: string;
    } | {
        type: "textarea";
        maxLength: number;
        minLength: number;
        placeholder: string;
        default?: string;
    } | {
        type: "select";
        options: {
            label: string;
            value: string;
        }[];
        default?: {
            label: string;
            value: string;
        };
    } | {
        type: "multiselect";
        options: {
            label: string;
            value: string;
        }[];
        default?: {
            label: string;
            value: string;
        }[];
    } | {
        type: "custom";
        tag: string;
        default?: string;
        options?: Record<string, any>;
    } | {
        type: "date";
        default?: string;
    } | {
        type: "datetime";
        default?: string;
    } | {
        type: "time";
        default?: string;
    };
    parse: (value: string) => OutputType;
    parseLead?: (lead: Lead) => OutputType;
};
/**
 * This type represents a field in a schema with its associated properties and methods.
 * These fields are used to define the structure and validation of data in a schema.
 * This are also sent to the frontend to generate forms dynamically.
 */
type OutputField<OutputType> = {
    name: string;
    description: string;
    example: OutputType;
    validator: (value: OutputType) => boolean;
    required?: boolean;
};
/**
 * This type represents a branch in a workflow node.
 */
type BranchSchema = {
    id: string;
    name: string;
    description: string;
};
/**
 * This type represents the branches in a workflow node, where each key is a lowercase string
 * and the value is a BranchSchema.
 */
type Branches<Keys extends Lowercase<string>> = Record<Keys, BranchSchema>;

type Node = {
    name: string;
    id: string;
    descripition: string;
    inputSchema: Record<string, InputField<any>>;
    outputSchema: Record<string, OutputField<any>>;
    groups: string[];
    branches: Branches<any>;
    isTriggerNode: boolean;
};

declare const nodes: {
    categorise_call: Node;
    get_agent_chat_history: Node;
    get_agent_chat_history_v2: Node;
    get_chat_response: Node;
    get_chat_response_v2: Node;
    add_to_sms_campaign: Node;
    get_s_m_s_campaign_messages: Node;
    make_call: Node;
    make_call_v2: Node;
    send_direct_mail: Node;
    send_email_notification: Node;
    send_ringless_voicemail: Node;
    send_s_m_s_notification: Node;
    send_sms_reply: Node;
    send_sms_reply_v2: Node;
    checkcondition: Node;
    repeat_job: Node;
    run_another_workflow: Node;
    split_for_test: Node;
    waittime: Node;
    on_outreachgenius_calendar_book_slot_called: Node;
    on_outreachgenius_calendar_get_available_slots_called: Node;
    outreachgenius_calendar_book_slot: Node;
    outreachgenius_calendar_get_available_slots: Node;
    address_validation_api_get_geo_address: Node;
    on_address_validation_api_get_geo_address_called: Node;
    certapro_api_get_events: Node;
    certapro_api_update_event: Node;
    on_certapro_api_get_events_called: Node;
    on_certapro_api_update_event_called: Node;
    certapro_v2_api_get_events: Node;
    certapro_v2_api_update_event: Node;
    on_certapro_v2_api_get_events_called: Node;
    on_certapro_v2_api_update_event_called: Node;
    certapro_v3_api_get_events: Node;
    certapro_v3_api_update_event: Node;
    on_certapro_v3_api_get_events_called: Node;
    on_certapro_v3_api_update_event_called: Node;
    genesys_cloud_api_forward_to_agent: Node;
    genesys_cloud_api_get_appointment_slots: Node;
    genesys_cloud_api_submit_lead: Node;
    on_genesys_cloud_api_forward_to_agent_called: Node;
    on_genesys_cloud_api_get_appointment_slots_called: Node;
    on_genesys_cloud_api_submit_lead_called: Node;
    housecall_v1_api_book_estimate: Node;
    housecall_v1_api_find_or_create_customer: Node;
    housecall_v1_api_get_customer: Node;
    housecall_v1_api_list_available_estimate_slots: Node;
    housecall_v1_api_search_customers_by_phone: Node;
    on_housecall_v1_api_book_estimate_called: Node;
    on_housecall_v1_api_find_or_create_customer_called: Node;
    on_housecall_v1_api_get_customer_called: Node;
    on_housecall_v1_api_list_available_estimate_slots_called: Node;
    on_housecall_v1_api_search_customers_by_phone_called: Node;
    hubspot_crm_api_book_meeting_slot: Node;
    hubspot_crm_api_create_contact: Node;
    hubspot_crm_api_create_note: Node;
    hubspot_crm_api_get_available_time_slots: Node;
    hubspot_crm_api_get_contact: Node;
    hubspot_crm_api_get_meeting_booking_info: Node;
    hubspot_crm_api_search_contacts: Node;
    hubspot_crm_api_test_connection: Node;
    on_hubspot_crm_api_book_meeting_slot_called: Node;
    on_hubspot_crm_api_create_contact_called: Node;
    on_hubspot_crm_api_create_note_called: Node;
    on_hubspot_crm_api_get_available_time_slots_called: Node;
    on_hubspot_crm_api_get_contact_called: Node;
    on_hubspot_crm_api_get_meeting_booking_info_called: Node;
    on_hubspot_crm_api_search_contacts_called: Node;
    on_hubspot_crm_api_test_connection_called: Node;
    public_holiday_api_holiday_check_v1: Node;
    on_public_holiday_api_holiday_check_v1_called: Node;
    sample_api_sample_tool: Node;
    on_sample_api_sample_tool_called: Node;
    sample_api_counter_tool: Node;
    on_sample_api_counter_tool_called: Node;
    serviceminder_api_locate_contact: Node;
    on_serviceminder_api_locate_contact_called: Node;
    serviceminder_api_add_or_update_contact: Node;
    on_serviceminder_api_add_or_update_contact_called: Node;
    serviceminder_api_add_note_to_contact: Node;
    on_serviceminder_api_add_note_to_contact_called: Node;
    serviceminder_api_search_available_slots: Node;
    on_serviceminder_api_search_available_slots_called: Node;
    serviceminder_api_book_appointment: Node;
    on_serviceminder_api_book_appointment_called: Node;
    serviceminder_api_log_call: Node;
    on_serviceminder_api_log_call_called: Node;
    psa_api_get_job: Node;
    on_psa_api_get_job_called: Node;
    psa_api_get_company: Node;
    on_psa_api_get_company_called: Node;
    psa_api_get_contact: Node;
    on_psa_api_get_contact_called: Node;
    psa_api_add_company: Node;
    on_psa_api_add_company_called: Node;
    psa_api_add_contact: Node;
    on_psa_api_add_contact_called: Node;
    psa_api_add_job: Node;
    on_psa_api_add_job_called: Node;
    servicetitan_api_get_campaigns: Node;
    on_servicetitan_api_get_campaigns_called: Node;
    servicetitan_api_get_business_units: Node;
    on_servicetitan_api_get_business_units_called: Node;
    servicetitan_api_get_job_types: Node;
    on_servicetitan_api_get_job_types_called: Node;
    servicetitan_api_get_geo_address: Node;
    on_servicetitan_api_get_geo_address_called: Node;
    servicetitan_api_get_customer_by_phone: Node;
    on_servicetitan_api_get_customer_by_phone_called: Node;
    servicetitan_api_get_customer_locations: Node;
    on_servicetitan_api_get_customer_locations_called: Node;
    servicetitan_api_create_customer: Node;
    on_servicetitan_api_create_customer_called: Node;
    servicetitan_api_update_customer: Node;
    on_servicetitan_api_update_customer_called: Node;
    servicetitan_api_create_customer_location: Node;
    on_servicetitan_api_create_customer_location_called: Node;
    servicetitan_api_create_job_for_new_customer: Node;
    on_servicetitan_api_create_job_for_new_customer_called: Node;
    servicetitan_api_create_job_for_existing_customer: Node;
    on_servicetitan_api_create_job_for_existing_customer_called: Node;
    servicetitan_api_get_jobs_by_customer: Node;
    on_servicetitan_api_get_jobs_by_customer_called: Node;
    servicetitan_api_update_job: Node;
    on_servicetitan_api_update_job_called: Node;
    servicetitan_api_get_available_technicians: Node;
    on_servicetitan_api_get_available_technicians_called: Node;
    servicetitan_api_get_active_technicians: Node;
    on_servicetitan_api_get_active_technicians_called: Node;
    servicetitan_api_get_appointments: Node;
    on_servicetitan_api_get_appointments_called: Node;
    servicetitan_api_reschedule_appointment: Node;
    on_servicetitan_api_reschedule_appointment_called: Node;
    servicetitan_api_update_location_contact: Node;
    on_servicetitan_api_update_location_contact_called: Node;
    servicetitan_api_update_customer_contact: Node;
    on_servicetitan_api_update_customer_contact_called: Node;
    servicetitan_api_get_cancellation_reasons: Node;
    on_servicetitan_api_get_cancellation_reasons_called: Node;
    servicetitan_api_cancel_job: Node;
    on_servicetitan_api_cancel_job_called: Node;
    servicetitan_api_update_customer_details: Node;
    on_servicetitan_api_update_customer_details_called: Node;
    servicetitan_api_add_call_summary_note: Node;
    on_servicetitan_api_add_call_summary_note_called: Node;
    you_can_book_me_api_get_events: Node;
    on_you_can_book_me_api_get_events_called: Node;
    you_can_book_me_api_book: Node;
    on_you_can_book_me_api_book_called: Node;
    add_tag_to_lead: Node;
    add_tag_to_lead_v2: Node;
    check_if_invoice_overdue: Node;
    get_live_staging_leads: Node;
    get_tags: Node;
    remove_tag_from_lead: Node;
    remove_tag_from_lead_v2: Node;
    add_note_to_lead_service_titan: Node;
    apply_tag_service_titan: Node;
    get_lead_service_titan: Node;
    get_service_titan_recurring_service_estimates: Node;
    get_service_titan_accounts_receievables: Node;
    get_unassigned_recurring_events: Node;
    service_titan_technicion_sms: Node;
    custom_webhook: Node;
    get_uploaded_leads_trigger: Node;
    inbound_call_trigger: Node;
    manual_trigger: Node;
    on_email_received: Node;
    on_new_appoinment_service_titan: Node;
    on_new_call_service_titan: Node;
    on_new_customer_service_titan: Node;
    on_new_estimate_service_titan: Node;
    on_new_invoice_service_titan: Node;
    on_new_job_or_project_note_service_titan: Node;
    on_new_job_service_titan: Node;
    on_new_lead_note_service_titan: Node;
    on_new_lead_service_titan: Node;
    on_new_payment_service_titan: Node;
    on_new_project_service_titan: Node;
    on_s_m_s_received: Node;
    on_tag_added: Node;
    on_updated_call_service_titan: Node;
    on_updated_estimate_service_titan: Node;
    on_website_vistor_indentified: Node;
    run_once_trigger: Node;
    webhook_trigger: Node;
    is_public_holiday: Node;
    extract_common_field: Node;
    extract_with_a_i: Node;
    get_constant: Node;
    get_variable: Node;
    process_variable: Node;
    store_variable: Node;
};

export { type Branches, type InputField, type Node, type OutputField, nodes };
