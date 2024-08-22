export interface Change {
    type: 'feat' | 'fix'
    description: string
  }
  
  export interface Release {
    version: string
    date: string
    changes: Change[]
  }