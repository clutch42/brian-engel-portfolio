import { Certification } from '../types/Certification';

export const certifications: Certification[] = [
  {
    id: 'aws-cloud-practitioner',
    name: 'AWS Certified Cloud Practitioner',
    issuingAuthority: 'Amazon Web Services (AWS)',
    issueDate: 'March 2023',
    expirationDate: 'March 2026',
    certificateNumber: 'AWSC-123456789',
    description: 'This certification validates your understanding of AWS Cloud and its core services.',
    link: 'https://www.credly.com/badges/da306d51-7157-4f83-8165-7e03fac1ae60/public_url',
    thumbnail: 'images/aws.png', // Replace with actual image URL
  },
  {
    id: 'comptia-a-plus',
    name: 'CompTIA A+',
    issuingAuthority: 'CompTIA',
    issueDate: 'January 2022',
    expirationDate: 'January 2024',
    certificateNumber: 'COMPTIA-987654321',
    description: 'This certification covers foundational IT skills and is a stepping stone into the IT profession.',
    link: 'https://www.credly.com/badges/300da58b-bf27-4b51-ac2d-bd172c575cc5/public_url',
    thumbnail: 'images/comptia.png', // Replace with actual image URL
  },
];
