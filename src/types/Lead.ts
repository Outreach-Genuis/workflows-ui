// Define the lead interface to use throughout the code
export interface Lead {
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
