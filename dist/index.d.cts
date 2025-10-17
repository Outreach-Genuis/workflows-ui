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
    make_call: Node;
    waittime: Node;
    extract_with_a_i: Node;
    add_to_sms_campaign: Node;
    get_s_m_s_campaign_messages: Node;
    send_email_notification: Node;
    send_s_m_s_notification: Node;
    add_tag_to_lead: Node;
    remove_tag_from_lead: Node;
    get_tags: Node;
    checkcondition: Node;
    custom_webhook: Node;
    webhook_trigger: Node;
    inbound_call_trigger: Node;
    get_uploaded_leads_trigger: Node;
    on_tag_added: Node;
    run_once_trigger: Node;
    split_for_test: Node;
    store_variable: Node;
    get_variable: Node;
    on_website_vistor_indentified: Node;
    on_new_lead_service_titan: Node;
    on_new_job_service_titan: Node;
    on_new_invoice_service_titan: Node;
    on_new_estimate_service_titan: Node;
    on_new_customer_service_titan: Node;
    on_new_appoinment_service_titan: Node;
    on_new_job_or_project_note_service_titan: Node;
    on_new_lead_note_service_titan: Node;
    on_new_call_service_titan: Node;
    on_updated_call_service_titan: Node;
    on_updated_estimate_service_titan: Node;
    on_new_project_service_titan: Node;
    on_new_payment_service_titan: Node;
    apply_tag_service_titan: Node;
    add_note_to_lead_service_titan: Node;
    get_lead_service_titan: Node;
    on_email_received: Node;
    process_variable: Node;
    get_constant: Node;
    send_direct_mail: Node;
    manual_trigger: Node;
    run_another_workflow: Node;
};

export { type Branches, type InputField, type Node, type OutputField, nodes };
