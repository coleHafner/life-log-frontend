/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createLogEntry = /* GraphQL */ `
  mutation CreateLogEntry(
    $input: CreateLogEntryInput!
    $condition: ModelLogEntryConditionInput
  ) {
    createLogEntry(input: $input, condition: $condition) {
      UUID
      owner
      date
      category
      thing
      notes1
      notes2
      notes3
      notes4
      createdAt
      updatedAt
    }
  }
`;
export const updateLogEntry = /* GraphQL */ `
  mutation UpdateLogEntry(
    $input: UpdateLogEntryInput!
    $condition: ModelLogEntryConditionInput
  ) {
    updateLogEntry(input: $input, condition: $condition) {
      UUID
      owner
      date
      category
      thing
      notes1
      notes2
      notes3
      notes4
      createdAt
      updatedAt
    }
  }
`;
export const deleteLogEntry = /* GraphQL */ `
  mutation DeleteLogEntry(
    $input: DeleteLogEntryInput!
    $condition: ModelLogEntryConditionInput
  ) {
    deleteLogEntry(input: $input, condition: $condition) {
      UUID
      owner
      date
      category
      thing
      notes1
      notes2
      notes3
      notes4
      createdAt
      updatedAt
    }
  }
`;
