import { make_call } from "./make_call";
import { waittime } from "./waittime";
import { extract_with_a_i } from "./extract_with_a_i";
import { add_to_sms_campaign } from "./add_to_sms_campaign";
import { get_s_m_s_campaign_messages } from "./get_s_m_s_campaign_messages";
import { send_email_notification } from "./send_email_notification";
import { send_s_m_s_notification } from "./send_s_m_s_notification";
import { add_tag_to_lead } from "./add_tag_to_lead";
import { remove_tag_from_lead } from "./remove_tag_from_lead";
import { get_tags } from "./get_tags";
import { checkcondition } from "./checkcondition";
import { custom_webhook } from "./custom_webhook";
import { webhook_trigger } from "./webhook_trigger";
import { inbound_call_trigger } from "./inbound_call_trigger";
import { get_uploaded_leads_trigger } from "./get_uploaded_leads_trigger";
import { on_tag_added } from "./on_tag_added";

export const nodes = { make_call, waittime, extract_with_a_i, add_to_sms_campaign, get_s_m_s_campaign_messages, send_email_notification, send_s_m_s_notification, add_tag_to_lead, remove_tag_from_lead, get_tags, checkcondition, custom_webhook, webhook_trigger, inbound_call_trigger, get_uploaded_leads_trigger, on_tag_added };
