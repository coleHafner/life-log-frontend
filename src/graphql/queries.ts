/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getLogEntry = /* GraphQL */ `
  query GetLogEntry($id: ID!) {
    getLogEntry(id: $id) {
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
export const listLogEntrys = /* GraphQL */ `
  query ListLogEntrys(
    $filter: ModelLogEntryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listLogEntrys(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
