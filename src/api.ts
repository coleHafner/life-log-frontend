/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateLogEntryInput = {
  UUID: string,
  owner: string,
  date: string,
  category: LogEntryCategory,
  thing: string,
  notes1?: string | null,
  notes2?: string | null,
  notes3?: string | null,
  notes4?: string | null,
};

export enum LogEntryCategory {
  Life = "Life",
  House = "House",
}


export type ModelLogEntryConditionInput = {
  UUID?: ModelIDInput | null,
  date?: ModelStringInput | null,
  category?: ModelLogEntryCategoryInput | null,
  thing?: ModelStringInput | null,
  notes1?: ModelStringInput | null,
  notes2?: ModelStringInput | null,
  notes3?: ModelStringInput | null,
  notes4?: ModelStringInput | null,
  and?: Array< ModelLogEntryConditionInput | null > | null,
  or?: Array< ModelLogEntryConditionInput | null > | null,
  not?: ModelLogEntryConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type ModelLogEntryCategoryInput = {
  eq?: LogEntryCategory | null,
  ne?: LogEntryCategory | null,
};

export type UpdateLogEntryInput = {
  UUID?: string | null,
  owner?: string | null,
  date?: string | null,
  category?: LogEntryCategory | null,
  thing?: string | null,
  notes1?: string | null,
  notes2?: string | null,
  notes3?: string | null,
  notes4?: string | null,
};

export type DeleteLogEntryInput = {
  id?: string | null,
};

export type ModelLogEntryFilterInput = {
  UUID?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  date?: ModelStringInput | null,
  category?: ModelLogEntryCategoryInput | null,
  thing?: ModelStringInput | null,
  notes1?: ModelStringInput | null,
  notes2?: ModelStringInput | null,
  notes3?: ModelStringInput | null,
  notes4?: ModelStringInput | null,
  and?: Array< ModelLogEntryFilterInput | null > | null,
  or?: Array< ModelLogEntryFilterInput | null > | null,
  not?: ModelLogEntryFilterInput | null,
};

export type CreateLogEntryMutationVariables = {
  input: CreateLogEntryInput,
  condition?: ModelLogEntryConditionInput | null,
};

export type CreateLogEntryMutation = {
  createLogEntry:  {
    __typename: "LogEntry",
    UUID: string,
    owner: string,
    date: string,
    category: LogEntryCategory,
    thing: string,
    notes1: string | null,
    notes2: string | null,
    notes3: string | null,
    notes4: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateLogEntryMutationVariables = {
  input: UpdateLogEntryInput,
  condition?: ModelLogEntryConditionInput | null,
};

export type UpdateLogEntryMutation = {
  updateLogEntry:  {
    __typename: "LogEntry",
    UUID: string,
    owner: string,
    date: string,
    category: LogEntryCategory,
    thing: string,
    notes1: string | null,
    notes2: string | null,
    notes3: string | null,
    notes4: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteLogEntryMutationVariables = {
  input: DeleteLogEntryInput,
  condition?: ModelLogEntryConditionInput | null,
};

export type DeleteLogEntryMutation = {
  deleteLogEntry:  {
    __typename: "LogEntry",
    UUID: string,
    owner: string,
    date: string,
    category: LogEntryCategory,
    thing: string,
    notes1: string | null,
    notes2: string | null,
    notes3: string | null,
    notes4: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetLogEntryQueryVariables = {
  id: string,
};

export type GetLogEntryQuery = {
  getLogEntry:  {
    __typename: "LogEntry",
    UUID: string,
    owner: string,
    date: string,
    category: LogEntryCategory,
    thing: string,
    notes1: string | null,
    notes2: string | null,
    notes3: string | null,
    notes4: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListLogEntrysQueryVariables = {
  filter?: ModelLogEntryFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListLogEntrysQuery = {
  listLogEntrys:  {
    __typename: "ModelLogEntryConnection",
    items:  Array< {
      __typename: "LogEntry",
      UUID: string,
      owner: string,
      date: string,
      category: LogEntryCategory,
      thing: string,
      notes1: string | null,
      notes2: string | null,
      notes3: string | null,
      notes4: string | null,
      createdAt: string,
      updatedAt: string,
    } | null > | null,
    nextToken: string | null,
  } | null,
};

export type OnCreateLogEntrySubscriptionVariables = {
  owner: string,
};

export type OnCreateLogEntrySubscription = {
  onCreateLogEntry:  {
    __typename: "LogEntry",
    UUID: string,
    owner: string,
    date: string,
    category: LogEntryCategory,
    thing: string,
    notes1: string | null,
    notes2: string | null,
    notes3: string | null,
    notes4: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateLogEntrySubscriptionVariables = {
  owner: string,
};

export type OnUpdateLogEntrySubscription = {
  onUpdateLogEntry:  {
    __typename: "LogEntry",
    UUID: string,
    owner: string,
    date: string,
    category: LogEntryCategory,
    thing: string,
    notes1: string | null,
    notes2: string | null,
    notes3: string | null,
    notes4: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteLogEntrySubscriptionVariables = {
  owner: string,
};

export type OnDeleteLogEntrySubscription = {
  onDeleteLogEntry:  {
    __typename: "LogEntry",
    UUID: string,
    owner: string,
    date: string,
    category: LogEntryCategory,
    thing: string,
    notes1: string | null,
    notes2: string | null,
    notes3: string | null,
    notes4: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
