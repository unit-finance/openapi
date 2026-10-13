# UnitFinanceSdk::CreditDecisionsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_credit_decision**](CreditDecisionsApi.md#create_credit_decision) | **POST** /credit-decisions | Create a credit decision |
| [**get_credit_decision**](CreditDecisionsApi.md#get_credit_decision) | **GET** /credit-decisions/{id} | Get a credit decision by id |
| [**list_credit_decisions**](CreditDecisionsApi.md#list_credit_decisions) | **GET** /credit-decisions | List credit decisions |


## create_credit_decision

> <CreateCreditDecision201Response> create_credit_decision(create_credit_decision_request)

Create a credit decision

Create a credit decision for a credit application. The request body is one of CreateApprovedCreditLimitDecisionRequest (an approved decision for an existing customer), CreateDeniedCreditLimitDecisionRequest (a denied decision for an existing customer), CreateManualReviewCreditLimitDecisionRequest (a manual review decision for an existing customer), CreateDeniedCreditApplicationDecisionRequest (a denied decision before a customer exists) or CreateManualReviewCreditApplicationDecisionRequest (a manual review decision before a customer exists).

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CreditDecisionsApi.new
create_credit_decision_request = UnitFinanceSdk::CreateApprovedCreditLimitDecisionRequest.new({data: UnitFinanceSdk::CreateApprovedCreditLimitDecisionData.new({type: 'approvedCreditLimitDecision', attributes: UnitFinanceSdk::CreateApprovedCreditLimitDecisionDataAttributes.new({external_application_id: 'A1234', submission_timestamp: Time.parse('2023-09-19T09:10:09.206Z'), decision_timestamp: Time.parse('2023-09-19T09:10:09.206Z'), credit_limit: 1000000, policy_exception: true, policy_exception_reason: 'Executive approval', additional_underwriting_data: { key: 3.56}}), relationships: UnitFinanceSdk::CreateApprovedCreditLimitDecisionDataRelationships.new({credit_application: UnitFinanceSdk::Relationship.new})})}) # CreateCreditDecisionRequest | 

begin
  # Create a credit decision
  result = api_instance.create_credit_decision(create_credit_decision_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CreditDecisionsApi->create_credit_decision: #{e}"
end
```

#### Using the create_credit_decision_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateCreditDecision201Response>, Integer, Hash)> create_credit_decision_with_http_info(create_credit_decision_request)

```ruby
begin
  # Create a credit decision
  data, status_code, headers = api_instance.create_credit_decision_with_http_info(create_credit_decision_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateCreditDecision201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CreditDecisionsApi->create_credit_decision_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_credit_decision_request** | [**CreateCreditDecisionRequest**](CreateCreditDecisionRequest.md) |  |  |

### Return type

[**CreateCreditDecision201Response**](CreateCreditDecision201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## get_credit_decision

> <CreateCreditDecision201Response> get_credit_decision(id)

Get a credit decision by id

Get a credit decision resource by id.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CreditDecisionsApi.new
id = 'id_example' # String | 

begin
  # Get a credit decision by id
  result = api_instance.get_credit_decision(id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CreditDecisionsApi->get_credit_decision: #{e}"
end
```

#### Using the get_credit_decision_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateCreditDecision201Response>, Integer, Hash)> get_credit_decision_with_http_info(id)

```ruby
begin
  # Get a credit decision by id
  data, status_code, headers = api_instance.get_credit_decision_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateCreditDecision201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CreditDecisionsApi->get_credit_decision_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |

### Return type

[**CreateCreditDecision201Response**](CreateCreditDecision201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## list_credit_decisions

> <ListCreditDecisions200Response> list_credit_decisions(opts)

List credit decisions

List credit decision resources. Paging can be applied.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CreditDecisionsApi.new
opts = {
  page_limit: 'page_limit_example', # String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
  page_offset: 'page_offset_example', # String | Optional. Number of resources to skip. See Pagination.
  filter_org_id: 'filter_org_id_example', # String | Optional. Filters the results by the specified org id.
  filter_customer_id: 'filter_customer_id_example', # String | Optional. Filters the results by the specified customer id.
  filter_account_id: 'filter_account_id_example', # String | Optional. Filters the results by the specified account id.
  filter_application_id: 'filter_application_id_example', # String | Optional. Filters the results by the specified application id.
  filter_bank_id: 'filter_bank_id_example', # String | Optional. Filters the results by the specified bank id.
  filter_decision: 'filter_decision_example', # String | Optional. Filters the results by the specified decision (one of Approved or Denied).
  filter_evaluation_type: 'filter_evaluation_type_example' # String | Optional. Filters the results by the specified evaluation type (one of CreditLimit or CreditApplication).
}

begin
  # List credit decisions
  result = api_instance.list_credit_decisions(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CreditDecisionsApi->list_credit_decisions: #{e}"
end
```

#### Using the list_credit_decisions_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListCreditDecisions200Response>, Integer, Hash)> list_credit_decisions_with_http_info(opts)

```ruby
begin
  # List credit decisions
  data, status_code, headers = api_instance.list_credit_decisions_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListCreditDecisions200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CreditDecisionsApi->list_credit_decisions_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Optional. Number of resources to skip. See Pagination. | [optional][default to &#39;0&#39;] |
| **filter_org_id** | **String** | Optional. Filters the results by the specified org id. | [optional] |
| **filter_customer_id** | **String** | Optional. Filters the results by the specified customer id. | [optional] |
| **filter_account_id** | **String** | Optional. Filters the results by the specified account id. | [optional] |
| **filter_application_id** | **String** | Optional. Filters the results by the specified application id. | [optional] |
| **filter_bank_id** | **String** | Optional. Filters the results by the specified bank id. | [optional] |
| **filter_decision** | **String** | Optional. Filters the results by the specified decision (one of Approved or Denied). | [optional] |
| **filter_evaluation_type** | **String** | Optional. Filters the results by the specified evaluation type (one of CreditLimit or CreditApplication). | [optional] |

### Return type

[**ListCreditDecisions200Response**](ListCreditDecisions200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

