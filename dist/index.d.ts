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
    add_note_to_lead_service_titan: Node;
    add_tag_to_lead: Node;
    add_to_sms_campaign: Node;
    apply_tag_service_titan: Node;
    certapro_api_update_event: Node;
    checkcondition: Node;
    check_if_invoice_overdue: Node;
    custom_webhook: Node;
    extract_common_field: Node;
    extract_with_a_i: Node;
    get_chat_response: Node;
    get_constant: Node;
    get_lead_service_titan: Node;
    get_live_staging_leads: Node;
    get_s_m_s_campaign_messages: Node;
    get_service_titan_recurring_service_estimates: Node;
    get_service_titan_accounts_receievables: Node;
    get_tags: Node;
    get_unassigned_recurring_events: Node;
    get_uploaded_leads_trigger: Node;
    get_variable: Node;
    housecall_v1_api_book_estimate: Node;
    housecall_v1_api_find_or_create_customer: Node;
    housecall_v1_api_get_customer: Node;
    housecall_v1_api_list_available_estimate_slots: Node;
    housecall_v1_api_search_customers_by_phone: Node;
    inbound_call_trigger: Node;
    is_public_holiday: Node;
    make_call: Node;
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
    outreachgenius_calendar_book_slot: Node;
    outreachgenius_calendar_get_available_slots: Node;
    process_variable: Node;
    remove_tag_from_lead: Node;
    repeat_job: Node;
    run_another_workflow: Node;
    run_once_trigger: Node;
    sample_api_counter_tool: Node;
    sample_api_sample_tool: Node;
    send_direct_mail: Node;
    send_email_notification: Node;
    send_s_m_s_notification: Node;
    send_sms_reply: Node;
    servicetitan_api_cancel_job: Node;
    servicetitan_api_create_customer: Node;
    servicetitan_api_create_customer_location: Node;
    servicetitan_api_create_job_for_existing_customer: Node;
    servicetitan_api_create_job_for_new_customer: Node;
    servicetitan_api_get_appointments: Node;
    servicetitan_api_get_available_technicians: Node;
    servicetitan_api_get_business_units: Node;
    servicetitan_api_get_campaigns: Node;
    servicetitan_api_get_cancellation_reasons: Node;
    servicetitan_api_get_customer_by_phone: Node;
    servicetitan_api_get_customer_locations: Node;
    servicetitan_api_get_geo_address: Node;
    servicetitan_api_get_job_types: Node;
    servicetitan_api_get_jobs_by_customer: Node;
    servicetitan_api_reschedule_appointment: Node;
    servicetitan_api_update_customer: Node;
    servicetitan_api_update_customer_contact: Node;
    servicetitan_api_update_customer_details: Node;
    servicetitan_api_update_job: Node;
    servicetitan_api_update_location_contact: Node;
    service_titan_technicion_sms: Node;
    split_for_test: Node;
    store_variable: Node;
    waittime: Node;
    webhook_trigger: Node;
};

export { type Branches, type InputField, type Node, type OutputField, nodes };
