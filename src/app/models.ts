export interface User {
  id?: string
  createdAt?: string
  updatedAt?: string
  email?: string
  firstName?: string
  lastName?: String
  password?: String
  company?: Company
  image?: String
  privilegeLevel?: string
  recruitments?: Recruitment[]
}

export interface Company {
  id: string
  name: string
  recruitments: Recruitment[]
}

export interface Recruitment {
  id: string
  title: string
  createdAt: string
  applicants: Applicant[]
  users?: User[]
}

export interface Applicant {
  id: string
  createdAt: string
  competences: string[]
  firstName: string
  lastName: string
  grade: number
  status: ApplicantStatus
}

export enum ApplicantStatus {
  NewApplicant, ApprovedForInterview,
  Interviewed, Hired, Discarded
}