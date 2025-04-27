export interface Certification {
    id: string;
    name: string;
    issuingAuthority: string;
    issueDate: string;
    expirationDate?: string;
    certificateNumber: string;
    description: string;
    link?: string;
    thumbnail?: string;
  }
  