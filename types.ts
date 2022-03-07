import type { DocumentNode } from 'graphql';
import * as Urql from '@urql/vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  uuid: string;
};

/** columns and relationships of "OrgUnit" */
export type OrgUnit = {
  readonly __typename?: 'OrgUnit';
  readonly id: Scalars['uuid'];
  readonly name: Scalars['String'];
  readonly parent_orgunit: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "OrgUnit" */
export type OrgUnit_Aggregate = {
  readonly __typename?: 'OrgUnit_aggregate';
  readonly aggregate: Maybe<OrgUnit_Aggregate_Fields>;
  readonly nodes: ReadonlyArray<OrgUnit>;
};

/** aggregate fields of "OrgUnit" */
export type OrgUnit_Aggregate_Fields = {
  readonly __typename?: 'OrgUnit_aggregate_fields';
  readonly count: Scalars['Int'];
  readonly max: Maybe<OrgUnit_Max_Fields>;
  readonly min: Maybe<OrgUnit_Min_Fields>;
};


/** aggregate fields of "OrgUnit" */
export type OrgUnit_Aggregate_FieldsCountArgs = {
  columns: InputMaybe<ReadonlyArray<OrgUnit_Select_Column>>;
  distinct: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "OrgUnit". All fields are combined with a logical 'AND'. */
export type OrgUnit_Bool_Exp = {
  readonly _and: InputMaybe<ReadonlyArray<OrgUnit_Bool_Exp>>;
  readonly _not: InputMaybe<OrgUnit_Bool_Exp>;
  readonly _or: InputMaybe<ReadonlyArray<OrgUnit_Bool_Exp>>;
  readonly id: InputMaybe<Uuid_Comparison_Exp>;
  readonly name: InputMaybe<String_Comparison_Exp>;
  readonly parent_orgunit: InputMaybe<Uuid_Comparison_Exp>;
};

/** unique or primary key constraints on table "OrgUnit" */
export enum OrgUnit_Constraint {
  /** unique or primary key constraint */
  OrgUnitNameKey = 'OrgUnit_name_key',
  /** unique or primary key constraint */
  OrgUnitPkey = 'OrgUnit_pkey'
}

/** input type for inserting data into table "OrgUnit" */
export type OrgUnit_Insert_Input = {
  readonly id: InputMaybe<Scalars['uuid']>;
  readonly name: InputMaybe<Scalars['String']>;
  readonly parent_orgunit: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type OrgUnit_Max_Fields = {
  readonly __typename?: 'OrgUnit_max_fields';
  readonly id: Maybe<Scalars['uuid']>;
  readonly name: Maybe<Scalars['String']>;
  readonly parent_orgunit: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type OrgUnit_Min_Fields = {
  readonly __typename?: 'OrgUnit_min_fields';
  readonly id: Maybe<Scalars['uuid']>;
  readonly name: Maybe<Scalars['String']>;
  readonly parent_orgunit: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "OrgUnit" */
export type OrgUnit_Mutation_Response = {
  readonly __typename?: 'OrgUnit_mutation_response';
  /** number of rows affected by the mutation */
  readonly affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  readonly returning: ReadonlyArray<OrgUnit>;
};

/** on_conflict condition type for table "OrgUnit" */
export type OrgUnit_On_Conflict = {
  readonly constraint: OrgUnit_Constraint;
  readonly update_columns: ReadonlyArray<OrgUnit_Update_Column>;
  readonly where: InputMaybe<OrgUnit_Bool_Exp>;
};

/** Ordering options when selecting data from "OrgUnit". */
export type OrgUnit_Order_By = {
  readonly id: InputMaybe<Order_By>;
  readonly name: InputMaybe<Order_By>;
  readonly parent_orgunit: InputMaybe<Order_By>;
};

/** primary key columns input for table: OrgUnit */
export type OrgUnit_Pk_Columns_Input = {
  readonly id: Scalars['uuid'];
};

/** select columns of table "OrgUnit" */
export enum OrgUnit_Select_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ParentOrgunit = 'parent_orgunit'
}

/** input type for updating data in table "OrgUnit" */
export type OrgUnit_Set_Input = {
  readonly id: InputMaybe<Scalars['uuid']>;
  readonly name: InputMaybe<Scalars['String']>;
  readonly parent_orgunit: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "OrgUnit" */
export enum OrgUnit_Update_Column {
  /** column name */
  Id = 'id',
  /** column name */
  Name = 'name',
  /** column name */
  ParentOrgunit = 'parent_orgunit'
}

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  readonly _eq: InputMaybe<Scalars['String']>;
  readonly _gt: InputMaybe<Scalars['String']>;
  readonly _gte: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  readonly _ilike: InputMaybe<Scalars['String']>;
  readonly _in: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  readonly _iregex: InputMaybe<Scalars['String']>;
  readonly _is_null: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  readonly _like: InputMaybe<Scalars['String']>;
  readonly _lt: InputMaybe<Scalars['String']>;
  readonly _lte: InputMaybe<Scalars['String']>;
  readonly _neq: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  readonly _nilike: InputMaybe<Scalars['String']>;
  readonly _nin: InputMaybe<ReadonlyArray<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  readonly _niregex: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  readonly _nlike: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  readonly _nregex: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  readonly _nsimilar: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  readonly _regex: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  readonly _similar: InputMaybe<Scalars['String']>;
};

/** mutation root */
export type Mutation_Root = {
  readonly __typename?: 'mutation_root';
  /** delete data from the table: "OrgUnit" */
  readonly delete_OrgUnit: Maybe<OrgUnit_Mutation_Response>;
  /** delete single row from the table: "OrgUnit" */
  readonly delete_OrgUnit_by_pk: Maybe<OrgUnit>;
  /** insert data into the table: "OrgUnit" */
  readonly insert_OrgUnit: Maybe<OrgUnit_Mutation_Response>;
  /** insert a single row into the table: "OrgUnit" */
  readonly insert_OrgUnit_one: Maybe<OrgUnit>;
  /** update data of the table: "OrgUnit" */
  readonly update_OrgUnit: Maybe<OrgUnit_Mutation_Response>;
  /** update single row of the table: "OrgUnit" */
  readonly update_OrgUnit_by_pk: Maybe<OrgUnit>;
};


/** mutation root */
export type Mutation_RootDelete_OrgUnitArgs = {
  where: OrgUnit_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_OrgUnit_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_OrgUnitArgs = {
  objects: ReadonlyArray<OrgUnit_Insert_Input>;
  on_conflict: InputMaybe<OrgUnit_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_OrgUnit_OneArgs = {
  object: OrgUnit_Insert_Input;
  on_conflict: InputMaybe<OrgUnit_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_OrgUnitArgs = {
  _set: InputMaybe<OrgUnit_Set_Input>;
  where: OrgUnit_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_OrgUnit_By_PkArgs = {
  _set: InputMaybe<OrgUnit_Set_Input>;
  pk_columns: OrgUnit_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  readonly __typename?: 'query_root';
  /** fetch data from the table: "OrgUnit" */
  readonly OrgUnit: ReadonlyArray<OrgUnit>;
  /** fetch aggregated fields from the table: "OrgUnit" */
  readonly OrgUnit_aggregate: OrgUnit_Aggregate;
  /** fetch data from the table: "OrgUnit" using primary key columns */
  readonly OrgUnit_by_pk: Maybe<OrgUnit>;
};


export type Query_RootOrgUnitArgs = {
  distinct_on: InputMaybe<ReadonlyArray<OrgUnit_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<OrgUnit_Order_By>>;
  where: InputMaybe<OrgUnit_Bool_Exp>;
};


export type Query_RootOrgUnit_AggregateArgs = {
  distinct_on: InputMaybe<ReadonlyArray<OrgUnit_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<OrgUnit_Order_By>>;
  where: InputMaybe<OrgUnit_Bool_Exp>;
};


export type Query_RootOrgUnit_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  readonly __typename?: 'subscription_root';
  /** fetch data from the table: "OrgUnit" */
  readonly OrgUnit: ReadonlyArray<OrgUnit>;
  /** fetch aggregated fields from the table: "OrgUnit" */
  readonly OrgUnit_aggregate: OrgUnit_Aggregate;
  /** fetch data from the table: "OrgUnit" using primary key columns */
  readonly OrgUnit_by_pk: Maybe<OrgUnit>;
};


export type Subscription_RootOrgUnitArgs = {
  distinct_on: InputMaybe<ReadonlyArray<OrgUnit_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<OrgUnit_Order_By>>;
  where: InputMaybe<OrgUnit_Bool_Exp>;
};


export type Subscription_RootOrgUnit_AggregateArgs = {
  distinct_on: InputMaybe<ReadonlyArray<OrgUnit_Select_Column>>;
  limit: InputMaybe<Scalars['Int']>;
  offset: InputMaybe<Scalars['Int']>;
  order_by: InputMaybe<ReadonlyArray<OrgUnit_Order_By>>;
  where: InputMaybe<OrgUnit_Bool_Exp>;
};


export type Subscription_RootOrgUnit_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  readonly _eq: InputMaybe<Scalars['uuid']>;
  readonly _gt: InputMaybe<Scalars['uuid']>;
  readonly _gte: InputMaybe<Scalars['uuid']>;
  readonly _in: InputMaybe<ReadonlyArray<Scalars['uuid']>>;
  readonly _is_null: InputMaybe<Scalars['Boolean']>;
  readonly _lt: InputMaybe<Scalars['uuid']>;
  readonly _lte: InputMaybe<Scalars['uuid']>;
  readonly _neq: InputMaybe<Scalars['uuid']>;
  readonly _nin: InputMaybe<ReadonlyArray<Scalars['uuid']>>;
};

export type CreateOrgUnitMutationVariables = Exact<{
  name: Scalars['String'];
  parent: Scalars['uuid'];
}>;


export type CreateOrgUnitMutation = { readonly __typename?: 'mutation_root', readonly insert_OrgUnit_one: { readonly __typename?: 'OrgUnit', readonly id: string, readonly name: string, readonly parent_orgunit: string | null } | null };

export type DeleteOrgUnitMutationVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type DeleteOrgUnitMutation = { readonly __typename?: 'mutation_root', readonly delete_OrgUnit_by_pk: { readonly __typename?: 'OrgUnit', readonly id: string, readonly name: string, readonly parent_orgunit: string | null } | null };

export type GetAllOrgUnitsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllOrgUnitsQuery = { readonly __typename?: 'query_root', readonly OrgUnit: ReadonlyArray<{ readonly __typename?: 'OrgUnit', readonly id: string, readonly name: string, readonly parent_orgunit: string | null }> };

export type GetOneOrgUnitQueryVariables = Exact<{
  id: Scalars['uuid'];
}>;


export type GetOneOrgUnitQuery = { readonly __typename?: 'query_root', readonly OrgUnit_by_pk: { readonly __typename?: 'OrgUnit', readonly id: string, readonly name: string, readonly parent_orgunit: string | null } | null };

export type OrgUnitFragmentFragment = { readonly __typename?: 'OrgUnit', readonly id: string, readonly name: string, readonly parent_orgunit: string | null };

export type UpdateOrgUnitMutationVariables = Exact<{
  id: Scalars['uuid'];
  name: InputMaybe<Scalars['String']>;
  parent: InputMaybe<Scalars['uuid']>;
}>;


export type UpdateOrgUnitMutation = { readonly __typename?: 'mutation_root', readonly update_OrgUnit_by_pk: { readonly __typename?: 'OrgUnit', readonly id: string, readonly name: string, readonly parent_orgunit: string | null } | null };

export const OrgUnitFragmentFragmentDoc = {"kind":"Document","definitions":[{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrgUnitFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrgUnit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parent_orgunit"}}]}}]} as unknown as DocumentNode;
export const CreateOrgUnitDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateOrgUnit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parent"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"insert_OrgUnit_one"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"object"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"parent_orgunit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parent"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrgUnitFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrgUnitFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrgUnit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parent_orgunit"}}]}}]} as unknown as DocumentNode;

export function useCreateOrgUnitMutation() {
  return Urql.useMutation<CreateOrgUnitMutation, CreateOrgUnitMutationVariables>(CreateOrgUnitDocument);
};
export const DeleteOrgUnitDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"DeleteOrgUnit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"delete_OrgUnit_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrgUnitFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrgUnitFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrgUnit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parent_orgunit"}}]}}]} as unknown as DocumentNode;

export function useDeleteOrgUnitMutation() {
  return Urql.useMutation<DeleteOrgUnitMutation, DeleteOrgUnitMutationVariables>(DeleteOrgUnitDocument);
};
export const GetAllOrgUnitsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllOrgUnits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"OrgUnit"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrgUnitFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrgUnitFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrgUnit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parent_orgunit"}}]}}]} as unknown as DocumentNode;

export function useGetAllOrgUnitsQuery(options: Omit<Urql.UseQueryArgs<never, GetAllOrgUnitsQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllOrgUnitsQuery>({ query: GetAllOrgUnitsDocument, ...options });
};
export const GetOneOrgUnitDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOneOrgUnit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"OrgUnit_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrgUnitFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrgUnitFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrgUnit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parent_orgunit"}}]}}]} as unknown as DocumentNode;

export function useGetOneOrgUnitQuery(options: Omit<Urql.UseQueryArgs<never, GetOneOrgUnitQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetOneOrgUnitQuery>({ query: GetOneOrgUnitDocument, ...options });
};
export const UpdateOrgUnitDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateOrgUnit"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"name"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"parent"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"uuid"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_OrgUnit_by_pk"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pk_columns"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}},{"kind":"Argument","name":{"kind":"Name","value":"_set"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"name"},"value":{"kind":"Variable","name":{"kind":"Name","value":"name"}}},{"kind":"ObjectField","name":{"kind":"Name","value":"parent_orgunit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"parent"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"FragmentSpread","name":{"kind":"Name","value":"OrgUnitFragment"}}]}}]}},{"kind":"FragmentDefinition","name":{"kind":"Name","value":"OrgUnitFragment"},"typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"OrgUnit"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"parent_orgunit"}}]}}]} as unknown as DocumentNode;

export function useUpdateOrgUnitMutation() {
  return Urql.useMutation<UpdateOrgUnitMutation, UpdateOrgUnitMutationVariables>(UpdateOrgUnitDocument);
};