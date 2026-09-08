# UnitFinanceSdk::TransactionsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_transaction**](TransactionsApi.md#get_transaction) | **GET** /accounts/{accountId}/transactions/{transactionId} | Get a transaction |
| [**list_transactions**](TransactionsApi.md#list_transactions) | **GET** /transactions | List transactions |
| [**update_transaction**](TransactionsApi.md#update_transaction) | **PATCH** /transactions/{transactionId} | Update a transaction |
| [**update_transaction_tags**](TransactionsApi.md#update_transaction_tags) | **PATCH** /accounts/{accountId}/transactions/{transactionId} | Update transaction tags |


## get_transaction

> <GetTransaction200Response> get_transaction(account_id, transaction_id, opts)

Get a transaction

Get a transaction by transaction id and account id.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::TransactionsApi.new
account_id = 'account_id_example' # String | 
transaction_id = 'transaction_id_example' # String | 
opts = {
  filter_customer_id: 'filter_customer_id_example', # String | Optional. Filters the result by the specified customer id.
  include: 'include_example' # String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources
}

begin
  # Get a transaction
  result = api_instance.get_transaction(account_id, transaction_id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling TransactionsApi->get_transaction: #{e}"
end
```

#### Using the get_transaction_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetTransaction200Response>, Integer, Hash)> get_transaction_with_http_info(account_id, transaction_id, opts)

```ruby
begin
  # Get a transaction
  data, status_code, headers = api_instance.get_transaction_with_http_info(account_id, transaction_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetTransaction200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling TransactionsApi->get_transaction_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account_id** | **String** |  |  |
| **transaction_id** | **String** |  |  |
| **filter_customer_id** | **String** | Optional. Filters the result by the specified customer id. | [optional] |
| **include** | **String** | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources | [optional] |

### Return type

[**GetTransaction200Response**](GetTransaction200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## list_transactions

> <ListTransactions200Response> list_transactions(opts)

List transactions

List transaction resources. Filtering and sorting can be applied. Paging is available only when filtering by customer id or account id.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::TransactionsApi.new
opts = {
  page_limit: 'page_limit_example', # String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
  page_offset: 'page_offset_example', # String | Optional. Number of resources to skip. See Pagination.
  filter_account_id: 'filter_account_id_example', # String | Optional. Filters the results by the specified account id.
  filter_account_ids: 'filter_account_ids_example', # String | Optional. Filters the results by the specified account ids. Usage example: *filter[accountIds][0]=10000&filter[accountIds][1]=10001*
  filter_customer_id: 'filter_customer_id_example', # String | Optional. Filters the results by the specified customer id.
  filter_query: 'filter_query_example', # String | Optional. search term according to the Full-Text Search Rules.
  filter_tags: 'filter_tags_example', # String | Optional. Filter Transactions by Tags.
  filter_since: 'filter_since_example', # String | Optional. Filters the Transactions that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z
  filter_until: 'filter_until_example', # String | Optional. Filters the Transactions that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z
  filter_card_id: 'filter_card_id_example', # String | Optional. Filters the results by the specified card id.
  filter_type: 'filter_type_example', # String | Optional. Filter Transactions by Transaction type. Possible values include: OriginatedAch, ReceivedAch, ReturnedAch, DishonoredAch, Book, Purchase, Atm, Fee, Reversal, CardTransaction, BatchRelease, Wire, ReturnedWire, Dispute, Adjustment, Interest, Reward, CheckDeposit, ReturnedCheckDeposit, PaymentCanceled, CustomerRepayment. Usage example: *filter[type][0]=OriginatedAch&filter[type][1]=ReceivedAch*
  filter_from_amount: 'filter_from_amount_example', # String | Optional. Filters the Transactions that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000
  filter_to_amount: 'filter_to_amount_example', # String | Optional. Filters the Transactions that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000
  filter_direction: 'filter_direction_example', # String | Optional. Filter Transactions by direction (Debit, Credit). Usage example: *filter[direction][0]=Debit*
  filter_exclude_fees: 'filter_exclude_fees_example', # String | Optional. Filter Fee type Transactions.
  filter_account_type: 'filter_account_type_example', # String | Optional. Filter Transactions by account type (deposit, credit).
  sort: 'sort_example', # String | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order.
  include: 'include_example' # String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources
}

begin
  # List transactions
  result = api_instance.list_transactions(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling TransactionsApi->list_transactions: #{e}"
end
```

#### Using the list_transactions_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListTransactions200Response>, Integer, Hash)> list_transactions_with_http_info(opts)

```ruby
begin
  # List transactions
  data, status_code, headers = api_instance.list_transactions_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListTransactions200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling TransactionsApi->list_transactions_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Optional. Number of resources to skip. See Pagination. | [optional][default to &#39;0&#39;] |
| **filter_account_id** | **String** | Optional. Filters the results by the specified account id. | [optional] |
| **filter_account_ids** | **String** | Optional. Filters the results by the specified account ids. Usage example: *filter[accountIds][0]&#x3D;10000&amp;filter[accountIds][1]&#x3D;10001* | [optional] |
| **filter_customer_id** | **String** | Optional. Filters the results by the specified customer id. | [optional] |
| **filter_query** | **String** | Optional. search term according to the Full-Text Search Rules. | [optional] |
| **filter_tags** | **String** | Optional. Filter Transactions by Tags. | [optional] |
| **filter_since** | **String** | Optional. Filters the Transactions that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z | [optional] |
| **filter_until** | **String** | Optional. Filters the Transactions that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z | [optional] |
| **filter_card_id** | **String** | Optional. Filters the results by the specified card id. | [optional] |
| **filter_type** | **String** | Optional. Filter Transactions by Transaction type. Possible values include: OriginatedAch, ReceivedAch, ReturnedAch, DishonoredAch, Book, Purchase, Atm, Fee, Reversal, CardTransaction, BatchRelease, Wire, ReturnedWire, Dispute, Adjustment, Interest, Reward, CheckDeposit, ReturnedCheckDeposit, PaymentCanceled, CustomerRepayment. Usage example: *filter[type][0]&#x3D;OriginatedAch&amp;filter[type][1]&#x3D;ReceivedAch* | [optional] |
| **filter_from_amount** | **String** | Optional. Filters the Transactions that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 | [optional] |
| **filter_to_amount** | **String** | Optional. Filters the Transactions that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 | [optional] |
| **filter_direction** | **String** | Optional. Filter Transactions by direction (Debit, Credit). Usage example: *filter[direction][0]&#x3D;Debit* | [optional] |
| **filter_exclude_fees** | **String** | Optional. Filter Fee type Transactions. | [optional] |
| **filter_account_type** | **String** | Optional. Filter Transactions by account type (deposit, credit). | [optional] |
| **sort** | **String** | Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional][default to &#39;createdAt&#39;] |
| **include** | **String** | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources | [optional] |

### Return type

[**ListTransactions200Response**](ListTransactions200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## update_transaction

> <UpdateTransaction200Response> update_transaction(transaction_id, update_transaction_request)

Update a transaction

Update a transaction. The request body is one of UpdateBookTransactionRequest (bookTransaction) or UpdateChargebackTransactionRequest (chargebackTransaction), discriminated by data.type.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::TransactionsApi.new
transaction_id = 'transaction_id_example' # String | 
update_transaction_request = UnitFinanceSdk::UpdateBookTransactionRequest.new({data: UnitFinanceSdk::UpdateBookTransactionData.new({type: 'bookTransaction', attributes: UnitFinanceSdk::UpdateBookTransactionDataAttributes.new, relationships: UnitFinanceSdk::CreateFeeDataRelationships.new({account: UnitFinanceSdk::Relationship.new})})}) # UpdateTransactionRequest | 

begin
  # Update a transaction
  result = api_instance.update_transaction(transaction_id, update_transaction_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling TransactionsApi->update_transaction: #{e}"
end
```

#### Using the update_transaction_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<UpdateTransaction200Response>, Integer, Hash)> update_transaction_with_http_info(transaction_id, update_transaction_request)

```ruby
begin
  # Update a transaction
  data, status_code, headers = api_instance.update_transaction_with_http_info(transaction_id, update_transaction_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <UpdateTransaction200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling TransactionsApi->update_transaction_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **transaction_id** | **String** |  |  |
| **update_transaction_request** | [**UpdateTransactionRequest**](UpdateTransactionRequest.md) |  |  |

### Return type

[**UpdateTransaction200Response**](UpdateTransaction200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## update_transaction_tags

> <UpdateTransaction200Response> update_transaction_tags(account_id, transaction_id, update_tags_request)

Update transaction tags

Update Tags Transaction.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::TransactionsApi.new
account_id = 'account_id_example' # String | 
transaction_id = 'transaction_id_example' # String | 
update_tags_request = UnitFinanceSdk::UpdateTagsRequest.new({data: UnitFinanceSdk::UpdateTagsData.new({type: 'transaction', attributes: UnitFinanceSdk::UpdateTagsDataAttributes.new})}) # UpdateTagsRequest | 

begin
  # Update transaction tags
  result = api_instance.update_transaction_tags(account_id, transaction_id, update_tags_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling TransactionsApi->update_transaction_tags: #{e}"
end
```

#### Using the update_transaction_tags_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<UpdateTransaction200Response>, Integer, Hash)> update_transaction_tags_with_http_info(account_id, transaction_id, update_tags_request)

```ruby
begin
  # Update transaction tags
  data, status_code, headers = api_instance.update_transaction_tags_with_http_info(account_id, transaction_id, update_tags_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <UpdateTransaction200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling TransactionsApi->update_transaction_tags_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account_id** | **String** |  |  |
| **transaction_id** | **String** |  |  |
| **update_tags_request** | [**UpdateTagsRequest**](UpdateTagsRequest.md) |  |  |

### Return type

[**UpdateTransaction200Response**](UpdateTransaction200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

