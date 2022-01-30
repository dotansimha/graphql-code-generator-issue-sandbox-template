import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from '@vue/composition-api';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type Date_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "org_unit" */
  delete_org_unit?: Maybe<Org_Unit_Mutation_Response>;
  /** delete single row from the table: "org_unit" */
  delete_org_unit_by_pk?: Maybe<Org_Unit>;
  /** delete data from the table: "person" */
  delete_person?: Maybe<Person_Mutation_Response>;
  /** delete single row from the table: "person" */
  delete_person_by_pk?: Maybe<Person>;
  /** insert data into the table: "org_unit" */
  insert_org_unit?: Maybe<Org_Unit_Mutation_Response>;
  /** insert a single row into the table: "org_unit" */
  insert_org_unit_one?: Maybe<Org_Unit>;
  /** insert data into the table: "person" */
  insert_person?: Maybe<Person_Mutation_Response>;
  /** insert a single row into the table: "person" */
  insert_person_one?: Maybe<Person>;
  /** update data of the table: "org_unit" */
  update_org_unit?: Maybe<Org_Unit_Mutation_Response>;
  /** update single row of the table: "org_unit" */
  update_org_unit_by_pk?: Maybe<Org_Unit>;
  /** update data of the table: "person" */
  update_person?: Maybe<Person_Mutation_Response>;
  /** update single row of the table: "person" */
  update_person_by_pk?: Maybe<Person>;
};


/** mutation root */
export type Mutation_RootDelete_Org_UnitArgs = {
  where: Org_Unit_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Org_Unit_By_PkArgs = {
  short_name: Scalars['String'];
};


/** mutation root */
export type Mutation_RootDelete_PersonArgs = {
  where: Person_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Person_By_PkArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type Mutation_RootInsert_Org_UnitArgs = {
  objects: Array<Org_Unit_Insert_Input>;
  on_conflict?: InputMaybe<Org_Unit_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Org_Unit_OneArgs = {
  object: Org_Unit_Insert_Input;
  on_conflict?: InputMaybe<Org_Unit_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_PersonArgs = {
  objects: Array<Person_Insert_Input>;
  on_conflict?: InputMaybe<Person_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Person_OneArgs = {
  object: Person_Insert_Input;
  on_conflict?: InputMaybe<Person_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_Org_UnitArgs = {
  _set?: InputMaybe<Org_Unit_Set_Input>;
  where: Org_Unit_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Org_Unit_By_PkArgs = {
  _set?: InputMaybe<Org_Unit_Set_Input>;
  pk_columns: Org_Unit_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_PersonArgs = {
  _inc?: InputMaybe<Person_Inc_Input>;
  _set?: InputMaybe<Person_Set_Input>;
  where: Person_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Person_By_PkArgs = {
  _inc?: InputMaybe<Person_Inc_Input>;
  _set?: InputMaybe<Person_Set_Input>;
  pk_columns: Person_Pk_Columns_Input;
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

/**
 * represents Clubs, CBs and the RFU, etc.
 *
 *
 * columns and relationships of "org_unit"
 */
export type Org_Unit = {
  __typename?: 'org_unit';
  legal_name: Scalars['String'];
  parent?: Maybe<Scalars['String']>;
  short_name: Scalars['String'];
};

/** aggregated selection of "org_unit" */
export type Org_Unit_Aggregate = {
  __typename?: 'org_unit_aggregate';
  aggregate?: Maybe<Org_Unit_Aggregate_Fields>;
  nodes: Array<Org_Unit>;
};

/** aggregate fields of "org_unit" */
export type Org_Unit_Aggregate_Fields = {
  __typename?: 'org_unit_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Org_Unit_Max_Fields>;
  min?: Maybe<Org_Unit_Min_Fields>;
};


/** aggregate fields of "org_unit" */
export type Org_Unit_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Org_Unit_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "org_unit". All fields are combined with a logical 'AND'. */
export type Org_Unit_Bool_Exp = {
  _and?: InputMaybe<Array<Org_Unit_Bool_Exp>>;
  _not?: InputMaybe<Org_Unit_Bool_Exp>;
  _or?: InputMaybe<Array<Org_Unit_Bool_Exp>>;
  legal_name?: InputMaybe<String_Comparison_Exp>;
  parent?: InputMaybe<String_Comparison_Exp>;
  short_name?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "org_unit" */
export enum Org_Unit_Constraint {
  /** unique or primary key constraint */
  OrgUnitPkey = 'org_unit_pkey'
}

/** input type for inserting data into table "org_unit" */
export type Org_Unit_Insert_Input = {
  legal_name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['String']>;
  short_name?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Org_Unit_Max_Fields = {
  __typename?: 'org_unit_max_fields';
  legal_name?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Org_Unit_Min_Fields = {
  __typename?: 'org_unit_min_fields';
  legal_name?: Maybe<Scalars['String']>;
  parent?: Maybe<Scalars['String']>;
  short_name?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "org_unit" */
export type Org_Unit_Mutation_Response = {
  __typename?: 'org_unit_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Org_Unit>;
};

/** on conflict condition type for table "org_unit" */
export type Org_Unit_On_Conflict = {
  constraint: Org_Unit_Constraint;
  update_columns?: Array<Org_Unit_Update_Column>;
  where?: InputMaybe<Org_Unit_Bool_Exp>;
};

/** Ordering options when selecting data from "org_unit". */
export type Org_Unit_Order_By = {
  legal_name?: InputMaybe<Order_By>;
  parent?: InputMaybe<Order_By>;
  short_name?: InputMaybe<Order_By>;
};

/** primary key columns input for table: org_unit */
export type Org_Unit_Pk_Columns_Input = {
  short_name: Scalars['String'];
};

/** select columns of table "org_unit" */
export enum Org_Unit_Select_Column {
  /** column name */
  LegalName = 'legal_name',
  /** column name */
  Parent = 'parent',
  /** column name */
  ShortName = 'short_name'
}

/** input type for updating data in table "org_unit" */
export type Org_Unit_Set_Input = {
  legal_name?: InputMaybe<Scalars['String']>;
  parent?: InputMaybe<Scalars['String']>;
  short_name?: InputMaybe<Scalars['String']>;
};

/** update columns of table "org_unit" */
export enum Org_Unit_Update_Column {
  /** column name */
  LegalName = 'legal_name',
  /** column name */
  Parent = 'parent',
  /** column name */
  ShortName = 'short_name'
}

/**
 * represents people involved in or supporting the sport
 *
 *
 * columns and relationships of "person"
 */
export type Person = {
  __typename?: 'person';
  dob: Scalars['date'];
  family_name: Scalars['String'];
  gender: Scalars['String'];
  given_name: Scalars['String'];
  id: Scalars['Int'];
  known_as?: Maybe<Scalars['String']>;
  other_names?: Maybe<Scalars['String']>;
  primary_org_unit?: Maybe<Scalars['String']>;
};

/** aggregated selection of "person" */
export type Person_Aggregate = {
  __typename?: 'person_aggregate';
  aggregate?: Maybe<Person_Aggregate_Fields>;
  nodes: Array<Person>;
};

/** aggregate fields of "person" */
export type Person_Aggregate_Fields = {
  __typename?: 'person_aggregate_fields';
  avg?: Maybe<Person_Avg_Fields>;
  count: Scalars['Int'];
  max?: Maybe<Person_Max_Fields>;
  min?: Maybe<Person_Min_Fields>;
  stddev?: Maybe<Person_Stddev_Fields>;
  stddev_pop?: Maybe<Person_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Person_Stddev_Samp_Fields>;
  sum?: Maybe<Person_Sum_Fields>;
  var_pop?: Maybe<Person_Var_Pop_Fields>;
  var_samp?: Maybe<Person_Var_Samp_Fields>;
  variance?: Maybe<Person_Variance_Fields>;
};


/** aggregate fields of "person" */
export type Person_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Person_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type Person_Avg_Fields = {
  __typename?: 'person_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "person". All fields are combined with a logical 'AND'. */
export type Person_Bool_Exp = {
  _and?: InputMaybe<Array<Person_Bool_Exp>>;
  _not?: InputMaybe<Person_Bool_Exp>;
  _or?: InputMaybe<Array<Person_Bool_Exp>>;
  dob?: InputMaybe<Date_Comparison_Exp>;
  family_name?: InputMaybe<String_Comparison_Exp>;
  gender?: InputMaybe<String_Comparison_Exp>;
  given_name?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  known_as?: InputMaybe<String_Comparison_Exp>;
  other_names?: InputMaybe<String_Comparison_Exp>;
  primary_org_unit?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "person" */
export enum Person_Constraint {
  /** unique or primary key constraint */
  PersonPkey = 'person_pkey'
}

/** input type for incrementing numeric columns in table "person" */
export type Person_Inc_Input = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "person" */
export type Person_Insert_Input = {
  dob?: InputMaybe<Scalars['date']>;
  family_name?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  given_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  known_as?: InputMaybe<Scalars['String']>;
  other_names?: InputMaybe<Scalars['String']>;
  primary_org_unit?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Person_Max_Fields = {
  __typename?: 'person_max_fields';
  dob?: Maybe<Scalars['date']>;
  family_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  given_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  known_as?: Maybe<Scalars['String']>;
  other_names?: Maybe<Scalars['String']>;
  primary_org_unit?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Person_Min_Fields = {
  __typename?: 'person_min_fields';
  dob?: Maybe<Scalars['date']>;
  family_name?: Maybe<Scalars['String']>;
  gender?: Maybe<Scalars['String']>;
  given_name?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  known_as?: Maybe<Scalars['String']>;
  other_names?: Maybe<Scalars['String']>;
  primary_org_unit?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "person" */
export type Person_Mutation_Response = {
  __typename?: 'person_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Person>;
};

/** on conflict condition type for table "person" */
export type Person_On_Conflict = {
  constraint: Person_Constraint;
  update_columns?: Array<Person_Update_Column>;
  where?: InputMaybe<Person_Bool_Exp>;
};

/** Ordering options when selecting data from "person". */
export type Person_Order_By = {
  dob?: InputMaybe<Order_By>;
  family_name?: InputMaybe<Order_By>;
  gender?: InputMaybe<Order_By>;
  given_name?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  known_as?: InputMaybe<Order_By>;
  other_names?: InputMaybe<Order_By>;
  primary_org_unit?: InputMaybe<Order_By>;
};

/** primary key columns input for table: person */
export type Person_Pk_Columns_Input = {
  id: Scalars['Int'];
};

/** select columns of table "person" */
export enum Person_Select_Column {
  /** column name */
  Dob = 'dob',
  /** column name */
  FamilyName = 'family_name',
  /** column name */
  Gender = 'gender',
  /** column name */
  GivenName = 'given_name',
  /** column name */
  Id = 'id',
  /** column name */
  KnownAs = 'known_as',
  /** column name */
  OtherNames = 'other_names',
  /** column name */
  PrimaryOrgUnit = 'primary_org_unit'
}

/** input type for updating data in table "person" */
export type Person_Set_Input = {
  dob?: InputMaybe<Scalars['date']>;
  family_name?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  given_name?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['Int']>;
  known_as?: InputMaybe<Scalars['String']>;
  other_names?: InputMaybe<Scalars['String']>;
  primary_org_unit?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type Person_Stddev_Fields = {
  __typename?: 'person_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type Person_Stddev_Pop_Fields = {
  __typename?: 'person_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type Person_Stddev_Samp_Fields = {
  __typename?: 'person_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type Person_Sum_Fields = {
  __typename?: 'person_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "person" */
export enum Person_Update_Column {
  /** column name */
  Dob = 'dob',
  /** column name */
  FamilyName = 'family_name',
  /** column name */
  Gender = 'gender',
  /** column name */
  GivenName = 'given_name',
  /** column name */
  Id = 'id',
  /** column name */
  KnownAs = 'known_as',
  /** column name */
  OtherNames = 'other_names',
  /** column name */
  PrimaryOrgUnit = 'primary_org_unit'
}

/** aggregate var_pop on columns */
export type Person_Var_Pop_Fields = {
  __typename?: 'person_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type Person_Var_Samp_Fields = {
  __typename?: 'person_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type Person_Variance_Fields = {
  __typename?: 'person_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "org_unit" */
  org_unit: Array<Org_Unit>;
  /** fetch aggregated fields from the table: "org_unit" */
  org_unit_aggregate: Org_Unit_Aggregate;
  /** fetch data from the table: "org_unit" using primary key columns */
  org_unit_by_pk?: Maybe<Org_Unit>;
  /** fetch data from the table: "person" */
  person: Array<Person>;
  /** fetch aggregated fields from the table: "person" */
  person_aggregate: Person_Aggregate;
  /** fetch data from the table: "person" using primary key columns */
  person_by_pk?: Maybe<Person>;
};


export type Query_RootOrg_UnitArgs = {
  distinct_on?: InputMaybe<Array<Org_Unit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Org_Unit_Order_By>>;
  where?: InputMaybe<Org_Unit_Bool_Exp>;
};


export type Query_RootOrg_Unit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Org_Unit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Org_Unit_Order_By>>;
  where?: InputMaybe<Org_Unit_Bool_Exp>;
};


export type Query_RootOrg_Unit_By_PkArgs = {
  short_name: Scalars['String'];
};


export type Query_RootPersonArgs = {
  distinct_on?: InputMaybe<Array<Person_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Person_Order_By>>;
  where?: InputMaybe<Person_Bool_Exp>;
};


export type Query_RootPerson_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Person_Order_By>>;
  where?: InputMaybe<Person_Bool_Exp>;
};


export type Query_RootPerson_By_PkArgs = {
  id: Scalars['Int'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "org_unit" */
  org_unit: Array<Org_Unit>;
  /** fetch aggregated fields from the table: "org_unit" */
  org_unit_aggregate: Org_Unit_Aggregate;
  /** fetch data from the table: "org_unit" using primary key columns */
  org_unit_by_pk?: Maybe<Org_Unit>;
  /** fetch data from the table: "person" */
  person: Array<Person>;
  /** fetch aggregated fields from the table: "person" */
  person_aggregate: Person_Aggregate;
  /** fetch data from the table: "person" using primary key columns */
  person_by_pk?: Maybe<Person>;
};


export type Subscription_RootOrg_UnitArgs = {
  distinct_on?: InputMaybe<Array<Org_Unit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Org_Unit_Order_By>>;
  where?: InputMaybe<Org_Unit_Bool_Exp>;
};


export type Subscription_RootOrg_Unit_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Org_Unit_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Org_Unit_Order_By>>;
  where?: InputMaybe<Org_Unit_Bool_Exp>;
};


export type Subscription_RootOrg_Unit_By_PkArgs = {
  short_name: Scalars['String'];
};


export type Subscription_RootPersonArgs = {
  distinct_on?: InputMaybe<Array<Person_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Person_Order_By>>;
  where?: InputMaybe<Person_Bool_Exp>;
};


export type Subscription_RootPerson_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Person_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Person_Order_By>>;
  where?: InputMaybe<Person_Bool_Exp>;
};


export type Subscription_RootPerson_By_PkArgs = {
  id: Scalars['Int'];
};

export type AllOrgUnitsQueryVariables = Exact<{
  search?: InputMaybe<Scalars['String']>;
}>;


export type AllOrgUnitsQuery = { __typename?: 'query_root', org_unit: Array<{ __typename?: 'org_unit', short_name: string, legal_name: string, parent?: string | null | undefined }> };


export const AllOrgUnitsDocument = gql`
    query allOrgUnits($search: String) {
  org_unit(where: {short_name: {_like: $search}}) {
    short_name
    legal_name
    parent
  }
}
    `;

/**
 * __useAllOrgUnitsQuery__
 *
 * To run a query within a Vue component, call `useAllOrgUnitsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllOrgUnitsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useAllOrgUnitsQuery({
 *   search: // value for 'search'
 * });
 */
export function useAllOrgUnitsQuery(variables: AllOrgUnitsQueryVariables | VueCompositionApi.Ref<AllOrgUnitsQueryVariables> | ReactiveFunction<AllOrgUnitsQueryVariables> = {}, options: VueApolloComposable.UseQueryOptions<AllOrgUnitsQuery, AllOrgUnitsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<AllOrgUnitsQuery, AllOrgUnitsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<AllOrgUnitsQuery, AllOrgUnitsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<AllOrgUnitsQuery, AllOrgUnitsQueryVariables>(AllOrgUnitsDocument, variables, options);
}
export type AllOrgUnitsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<AllOrgUnitsQuery, AllOrgUnitsQueryVariables>;