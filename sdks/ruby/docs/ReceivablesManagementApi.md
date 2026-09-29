# UnitFinanceSdk::ReceivablesManagementApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_receivable_by_id**](ReceivablesManagementApi.md#get_receivable_by_id) | **GET** /receivables/{id} | Get receivable by id |
| [**list_receivables**](ReceivablesManagementApi.md#list_receivables) | **GET** /receivables | List receivables |


## get_receivable_by_id

> <GetReceivableById200Response> get_receivable_by_id(id)

Get receivable by id

Get a receivable resource by id.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::ReceivablesManagementApi.new
id = 'id_example' # String | 

begin
  # Get receivable by id
  result = api_instance.get_receivable_by_id(id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ReceivablesManagementApi->get_receivable_by_id: #{e}"
end
```

#### Using the get_receivable_by_id_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetReceivableById200Response>, Integer, Hash)> get_receivable_by_id_with_http_info(id)

```ruby
begin
  # Get receivable by id
  data, status_code, headers = api_instance.get_receivable_by_id_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetReceivableById200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ReceivablesManagementApi->get_receivable_by_id_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |

### Return type

[**GetReceivableById200Response**](GetReceivableById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## list_receivables

> <ListReceivables200Response> list_receivables(opts)

List receivables

List receivables resources. Paging can be applied.  The same endpoint also serves the receivables balance report: when `filter[purchaseDueDate]` or `filter[daysUntilPurchase]` is supplied, the response `data` is a single receivables balance resource holding the receivables balance that is due to be purchased by the specified date, or within the specified number of days from today.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::ReceivablesManagementApi.new
opts = {
  page_limit: 'page_limit_example', # String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
  page_offset: 'page_offset_example', # String | Optional. Number of resources to skip. See Pagination.
  filter_customer_id: 'filter_customer_id_example', # String | Optional. Filters the results by the specified customer id.
  filter_receivable_type: 'filter_receivable_type_example', # String | Optional. Filters the results by one of the following receivable types [\"bankReceivable\", \"orgReceivable\", \"capitalPartnerReceivable\"]
  filter_repayment_status_type: 'filter_repayment_status_type_example', # String | Optional. Filters the results by one of the following repayment status types [\"notRepaid\", \"partiallyRepaid\", \"fullyRepaid\"]
  filter_purchase_due_date: 'filter_purchase_due_date_example', # String | Optional. Filters the results by the specified purchase due date e.g. 2023-05-25. When supplied, a receivables balance resource is returned instead of an array of receivables.
  filter_days_until_purchase: 'filter_days_until_purchase_example' # String | Optional. Filters the results by days until purchase. When supplied, a receivables balance resource is returned instead of an array of receivables.
}

begin
  # List receivables
  result = api_instance.list_receivables(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ReceivablesManagementApi->list_receivables: #{e}"
end
```

#### Using the list_receivables_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListReceivables200Response>, Integer, Hash)> list_receivables_with_http_info(opts)

```ruby
begin
  # List receivables
  data, status_code, headers = api_instance.list_receivables_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListReceivables200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling ReceivablesManagementApi->list_receivables_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Optional. Number of resources to skip. See Pagination. | [optional][default to &#39;0&#39;] |
| **filter_customer_id** | **String** | Optional. Filters the results by the specified customer id. | [optional] |
| **filter_receivable_type** | **String** | Optional. Filters the results by one of the following receivable types [\&quot;bankReceivable\&quot;, \&quot;orgReceivable\&quot;, \&quot;capitalPartnerReceivable\&quot;] | [optional] |
| **filter_repayment_status_type** | **String** | Optional. Filters the results by one of the following repayment status types [\&quot;notRepaid\&quot;, \&quot;partiallyRepaid\&quot;, \&quot;fullyRepaid\&quot;] | [optional] |
| **filter_purchase_due_date** | **String** | Optional. Filters the results by the specified purchase due date e.g. 2023-05-25. When supplied, a receivables balance resource is returned instead of an array of receivables. | [optional] |
| **filter_days_until_purchase** | **String** | Optional. Filters the results by days until purchase. When supplied, a receivables balance resource is returned instead of an array of receivables. | [optional] |

### Return type

[**ListReceivables200Response**](ListReceivables200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

