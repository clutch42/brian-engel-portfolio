import { Certification } from '../types/Certification';

export const certifications: Certification[] = [
  {
    id: 'aws-cloud-practitioner',
    name: 'AWS Certified Cloud Practitioner',
    issuingAuthority: 'Amazon Web Services (AWS)',
    issueDate: 'February 14, 2025',
    expirationDate: 'February 14, 2028',
    certificateNumber: '3687df8c8812459a831ccad3347a47e8',
    description: 'Earners of this certification have a fundamental understanding of IT services and their uses in the AWS Cloud. \
    They demonstrated cloud fluency and foundational AWS knowledge. Badge owners are able to identify essential AWS services \
    necessary to set up AWS-focused projects.',
    link: 'https://www.credly.com/badges/da306d51-7157-4f83-8165-7e03fac1ae60/public_url',
    thumbnail: '/images/aws.png'
  },
  {
    id: 'comptia-a-plus',
    name: 'CompTIA A+',
    issuingAuthority: 'CompTIA',
    issueDate: 'April 14, 2025',
    expirationDate: 'April 14, 2028',
    certificateNumber: 'COMP001022744649',
    description: 'Earners of the CompTIA A+ certification are proven problem solvers who are able to perform critical IT support \
    tasks including device configuration, data backup and recovery, and operating system configuration. CompTIA A+ certified \
    professionals have demonstrated baseline security skills for IT support roles and are able to detect and remove malware, address \
    privacy concerns, and troubleshoot core service challenges.',
    link: 'https://www.credly.com/badges/300da58b-bf27-4b51-ac2d-bd172c575cc5/public_url',
    thumbnail: '/images/comptia.png'
  },
];

export default certifications;