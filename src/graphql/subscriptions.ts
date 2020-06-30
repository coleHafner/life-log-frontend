/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateLogEntry = /* GraphQL */ `
  subscription OnCreateLogEntry($owner: String!) {
    onCreateLogEntry(owner: $owner) {
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
export const onUpdateLogEntry = /* GraphQL */ `
  subscription OnUpdateLogEntry($owner: String!) {
    onUpdateLogEntry(owner: $owner) {
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
export const onDeleteLogEntry = /* GraphQL */ `
  subscription OnDeleteLogEntry($owner: String!) {
    onDeleteLogEntry(owner: $owner) {
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
