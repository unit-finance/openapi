# UnitFinanceSdk::CardFraudOutreachApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_policy**](CardFraudOutreachApi.md#create_policy) | **POST** /fraud-outreach-policies | Create a card fraud outreach policy |
| [**get_card_fraud_case_by_id**](CardFraudOutreachApi.md#get_card_fraud_case_by_id) | **GET** /card-fraud-cases/{id} | Get a card fraud case by id |
| [**get_policy_by_id**](CardFraudOutreachApi.md#get_policy_by_id) | **GET** /fraud-outreach-policies/{policyId} | Get a card fraud outreach policy by id |
| [**list_card_fraud_cases**](CardFraudOutreachApi.md#list_card_fraud_cases) | **GET** /card-fraud-cases | List card fraud cases |
| [**mark_card_fraud_case_as_fraud**](CardFraudOutreachApi.md#mark_card_fraud_case_as_fraud) | **POST** /card-fraud-cases/{id}/fraud | Mark a card fraud case as fraud |
| [**mark_card_fraud_case_as_no_fraud**](CardFraudOutreachApi.md#mark_card_fraud_case_as_no_fraud) | **POST** /card-fraud-cases/{id}/no-fraud | Mark a card fraud case as no fraud |
| [**update_policy**](CardFraudOutreachApi.md#update_policy) | **PATCH** /fraud-outreach-policies/{policyId} | Update a card fraud outreach policy |


## create_policy

> <CreatePolicy201Response> create_policy(create_policy_request)

Create a card fraud outreach policy

Create a card fraud outreach policy.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardFraudOutreachApi.new
create_policy_request = UnitFinanceSdk::CreatePolicyRequest.new({data: UnitFinanceSdk::CreatePolicyData.new({type: 'cardFraudOutreachPolicy', attributes: UnitFinanceSdk::CreatePolicyDataAttributes.new({contact_phone: UnitFinanceSdk::PhoneType.new({country_code: 'country_code_example', number: 'number_example'}), contact_url: 'https://thisIsMyDomain.unit.co'}), relationships: UnitFinanceSdk::CreatePolicyDataRelationships.new({email_outreach_settings: UnitFinanceSdk::Relationship.new, message_outreach_settings: UnitFinanceSdk::Relationship.new, white_label_theme: })})}) # CreatePolicyRequest | 

begin
  # Create a card fraud outreach policy
  result = api_instance.create_policy(create_policy_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardFraudOutreachApi->create_policy: #{e}"
end
```

#### Using the create_policy_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreatePolicy201Response>, Integer, Hash)> create_policy_with_http_info(create_policy_request)

```ruby
begin
  # Create a card fraud outreach policy
  data, status_code, headers = api_instance.create_policy_with_http_info(create_policy_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreatePolicy201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardFraudOutreachApi->create_policy_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_policy_request** | [**CreatePolicyRequest**](CreatePolicyRequest.md) |  |  |

### Return type

[**CreatePolicy201Response**](CreatePolicy201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## get_card_fraud_case_by_id

> <GetCardFraudCaseById200Response> get_card_fraud_case_by_id(id)

Get a card fraud case by id

Get a card fraud case by id.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardFraudOutreachApi.new
id = 'id_example' # String | 

begin
  # Get a card fraud case by id
  result = api_instance.get_card_fraud_case_by_id(id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardFraudOutreachApi->get_card_fraud_case_by_id: #{e}"
end
```

#### Using the get_card_fraud_case_by_id_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetCardFraudCaseById200Response>, Integer, Hash)> get_card_fraud_case_by_id_with_http_info(id)

```ruby
begin
  # Get a card fraud case by id
  data, status_code, headers = api_instance.get_card_fraud_case_by_id_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetCardFraudCaseById200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardFraudOutreachApi->get_card_fraud_case_by_id_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |

### Return type

[**GetCardFraudCaseById200Response**](GetCardFraudCaseById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## get_policy_by_id

> <CreatePolicy201Response> get_policy_by_id(policy_id)

Get a card fraud outreach policy by id

Get a card fraud outreach policy by id.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardFraudOutreachApi.new
policy_id = 'policy_id_example' # String | 

begin
  # Get a card fraud outreach policy by id
  result = api_instance.get_policy_by_id(policy_id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardFraudOutreachApi->get_policy_by_id: #{e}"
end
```

#### Using the get_policy_by_id_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreatePolicy201Response>, Integer, Hash)> get_policy_by_id_with_http_info(policy_id)

```ruby
begin
  # Get a card fraud outreach policy by id
  data, status_code, headers = api_instance.get_policy_by_id_with_http_info(policy_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreatePolicy201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardFraudOutreachApi->get_policy_by_id_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **policy_id** | **String** |  |  |

### Return type

[**CreatePolicy201Response**](CreatePolicy201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## list_card_fraud_cases

> <ListCardFraudCases200Response> list_card_fraud_cases(opts)

List card fraud cases

List card fraud case resources. Paging can be applied.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardFraudOutreachApi.new
opts = {
  page_limit: 'page_limit_example', # String | Optional. Maximum number of resources that will be returned. Maximum is 10000 resources. See Pagination.
  page_offset: 'page_offset_example', # String | Optional. Number of resources to skip. See Pagination.
  filter_card_id: 'filter_card_id_example', # String | Optional. Filter by card id.
  filter_account_id: 'filter_account_id_example', # String | Optional. Filter by account id.
  filter_customer_id: 'filter_customer_id_example', # String | Optional. Filter by customer id.
  filter_status: 'filter_status_example', # String | Optional. Filter by case status. Can be one of the following values: Created, Active, Closed, Expired.
  filter_decision: 'filter_decision_example', # String | Optional. Filter by case decision. Can be one of the following values: Pending, Fraud, NoFraud.
  sort: 'sort_example' # String | Optional. sort=createdAt for ascending order or sort=-createdAt (leading minus sign) for descending order.
}

begin
  # List card fraud cases
  result = api_instance.list_card_fraud_cases(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardFraudOutreachApi->list_card_fraud_cases: #{e}"
end
```

#### Using the list_card_fraud_cases_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListCardFraudCases200Response>, Integer, Hash)> list_card_fraud_cases_with_http_info(opts)

```ruby
begin
  # List card fraud cases
  data, status_code, headers = api_instance.list_card_fraud_cases_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListCardFraudCases200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardFraudOutreachApi->list_card_fraud_cases_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Optional. Maximum number of resources that will be returned. Maximum is 10000 resources. See Pagination. | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Optional. Number of resources to skip. See Pagination. | [optional][default to &#39;0&#39;] |
| **filter_card_id** | **String** | Optional. Filter by card id. | [optional] |
| **filter_account_id** | **String** | Optional. Filter by account id. | [optional] |
| **filter_customer_id** | **String** | Optional. Filter by customer id. | [optional] |
| **filter_status** | **String** | Optional. Filter by case status. Can be one of the following values: Created, Active, Closed, Expired. | [optional] |
| **filter_decision** | **String** | Optional. Filter by case decision. Can be one of the following values: Pending, Fraud, NoFraud. | [optional] |
| **sort** | **String** | Optional. sort&#x3D;createdAt for ascending order or sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional][default to &#39;-createdAt&#39;] |

### Return type

[**ListCardFraudCases200Response**](ListCardFraudCases200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## mark_card_fraud_case_as_fraud

> <GetCardFraudCaseById200Response> mark_card_fraud_case_as_fraud(id, mark_card_fraud_case_as_fraud_request)

Mark a card fraud case as fraud

Mark a card fraud case as fraud.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardFraudOutreachApi.new
id = 'id_example' # String | 
mark_card_fraud_case_as_fraud_request = UnitFinanceSdk::MarkCardFraudCaseAsFraudRequest.new({data: UnitFinanceSdk::MarkCardFraudCaseAsFraudData.new({type: 'markAsFraudRequest', attributes: UnitFinanceSdk::MarkCardFraudCaseAsFraudDataAttributes.new({fraudulent_activity_ids: [15, 16, 17]})})}) # MarkCardFraudCaseAsFraudRequest | 

begin
  # Mark a card fraud case as fraud
  result = api_instance.mark_card_fraud_case_as_fraud(id, mark_card_fraud_case_as_fraud_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardFraudOutreachApi->mark_card_fraud_case_as_fraud: #{e}"
end
```

#### Using the mark_card_fraud_case_as_fraud_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetCardFraudCaseById200Response>, Integer, Hash)> mark_card_fraud_case_as_fraud_with_http_info(id, mark_card_fraud_case_as_fraud_request)

```ruby
begin
  # Mark a card fraud case as fraud
  data, status_code, headers = api_instance.mark_card_fraud_case_as_fraud_with_http_info(id, mark_card_fraud_case_as_fraud_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetCardFraudCaseById200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardFraudOutreachApi->mark_card_fraud_case_as_fraud_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **mark_card_fraud_case_as_fraud_request** | [**MarkCardFraudCaseAsFraudRequest**](MarkCardFraudCaseAsFraudRequest.md) |  |  |

### Return type

[**GetCardFraudCaseById200Response**](GetCardFraudCaseById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## mark_card_fraud_case_as_no_fraud

> <GetCardFraudCaseById200Response> mark_card_fraud_case_as_no_fraud(id, opts)

Mark a card fraud case as no fraud

Mark a card fraud case as no fraud.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardFraudOutreachApi.new
id = 'id_example' # String | 
opts = {
  body: { ... } # Object | 
}

begin
  # Mark a card fraud case as no fraud
  result = api_instance.mark_card_fraud_case_as_no_fraud(id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardFraudOutreachApi->mark_card_fraud_case_as_no_fraud: #{e}"
end
```

#### Using the mark_card_fraud_case_as_no_fraud_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetCardFraudCaseById200Response>, Integer, Hash)> mark_card_fraud_case_as_no_fraud_with_http_info(id, opts)

```ruby
begin
  # Mark a card fraud case as no fraud
  data, status_code, headers = api_instance.mark_card_fraud_case_as_no_fraud_with_http_info(id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetCardFraudCaseById200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardFraudOutreachApi->mark_card_fraud_case_as_no_fraud_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **body** | **Object** |  | [optional] |

### Return type

[**GetCardFraudCaseById200Response**](GetCardFraudCaseById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## update_policy

> <CreatePolicy201Response> update_policy(policy_id, update_policy_request)

Update a card fraud outreach policy

Update a card fraud outreach policy.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardFraudOutreachApi.new
policy_id = 'policy_id_example' # String | 
update_policy_request = UnitFinanceSdk::UpdatePolicyRequest.new({data: UnitFinanceSdk::UpdatePolicyData.new({type: 'cardFraudOutreachPolicy', attributes: UnitFinanceSdk::UpdatePolicyDataAttributes.new})}) # UpdatePolicyRequest | 

begin
  # Update a card fraud outreach policy
  result = api_instance.update_policy(policy_id, update_policy_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardFraudOutreachApi->update_policy: #{e}"
end
```

#### Using the update_policy_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreatePolicy201Response>, Integer, Hash)> update_policy_with_http_info(policy_id, update_policy_request)

```ruby
begin
  # Update a card fraud outreach policy
  data, status_code, headers = api_instance.update_policy_with_http_info(policy_id, update_policy_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreatePolicy201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardFraudOutreachApi->update_policy_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **policy_id** | **String** |  |  |
| **update_policy_request** | [**UpdatePolicyRequest**](UpdatePolicyRequest.md) |  |  |

### Return type

[**CreatePolicy201Response**](CreatePolicy201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

