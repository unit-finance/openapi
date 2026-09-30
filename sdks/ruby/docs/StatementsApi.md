# UnitFinanceSdk::StatementsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_bank_verification_pdf**](StatementsApi.md#get_bank_verification_pdf) | **GET** /statements/{accountId}/bank/pdf | Get a bank verification PDF |
| [**get_statement_html**](StatementsApi.md#get_statement_html) | **GET** /statements/{id}/html | Get a statement HTML |
| [**get_statement_pdf**](StatementsApi.md#get_statement_pdf) | **GET** /statements/{id}/pdf | Get a statement PDF |
| [**list_statements**](StatementsApi.md#list_statements) | **GET** /statements | List statements |


## get_bank_verification_pdf

> File get_bank_verification_pdf(account_id, opts)

Get a bank verification PDF

Customers may be required, for various reasons, to provide proof that they hold a bank account with a certain financial institution. This is typically provided by the bank in a letter called \"Bank verification letter\", which includes the customer, account and financial institution information. If the customer is required to prove availability of funds, the letter may also include the available balance on the account.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::StatementsApi.new
account_id = 'account_id_example' # String | 
opts = {
  include_proof_of_funds: 'include_proof_of_funds_example' # String | Optional. include customer proof of funds
}

begin
  # Get a bank verification PDF
  result = api_instance.get_bank_verification_pdf(account_id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling StatementsApi->get_bank_verification_pdf: #{e}"
end
```

#### Using the get_bank_verification_pdf_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(File, Integer, Hash)> get_bank_verification_pdf_with_http_info(account_id, opts)

```ruby
begin
  # Get a bank verification PDF
  data, status_code, headers = api_instance.get_bank_verification_pdf_with_http_info(account_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => File
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling StatementsApi->get_bank_verification_pdf_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **account_id** | **String** |  |  |
| **include_proof_of_funds** | **String** | Optional. include customer proof of funds | [optional][default to &#39;false&#39;] |

### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf, application/vnd.api+json


## get_statement_html

> String get_statement_html(id, opts)

Get a statement HTML

Get a statement HTML output by id.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::StatementsApi.new
id = 'id_example' # String | 
opts = {
  filter_customer_id: 'filter_customer_id_example', # String | Optional. Verify that the statements belongs to the customer.
  language: 'language_example' # String | Optional. Select the statement language. en - English, es - Spanish
}

begin
  # Get a statement HTML
  result = api_instance.get_statement_html(id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling StatementsApi->get_statement_html: #{e}"
end
```

#### Using the get_statement_html_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(String, Integer, Hash)> get_statement_html_with_http_info(id, opts)

```ruby
begin
  # Get a statement HTML
  data, status_code, headers = api_instance.get_statement_html_with_http_info(id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => String
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling StatementsApi->get_statement_html_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **filter_customer_id** | **String** | Optional. Verify that the statements belongs to the customer. | [optional] |
| **language** | **String** | Optional. Select the statement language. en - English, es - Spanish | [optional][default to &#39;en&#39;] |

### Return type

**String**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/html, application/vnd.api+json


## get_statement_pdf

> File get_statement_pdf(id, opts)

Get a statement PDF

Get a statement PDF output by id.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::StatementsApi.new
id = 'id_example' # String | 
opts = {
  filter_customer_id: 'filter_customer_id_example', # String | Optional. Verify that the statements belongs to the customer.
  language: 'language_example' # String | Optional. Select the statement language. en - English, es - Spanish
}

begin
  # Get a statement PDF
  result = api_instance.get_statement_pdf(id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling StatementsApi->get_statement_pdf: #{e}"
end
```

#### Using the get_statement_pdf_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(File, Integer, Hash)> get_statement_pdf_with_http_info(id, opts)

```ruby
begin
  # Get a statement PDF
  data, status_code, headers = api_instance.get_statement_pdf_with_http_info(id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => File
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling StatementsApi->get_statement_pdf_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **filter_customer_id** | **String** | Optional. Verify that the statements belongs to the customer. | [optional] |
| **language** | **String** | Optional. Select the statement language. en - English, es - Spanish | [optional][default to &#39;en&#39;] |

### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf, application/vnd.api+json


## list_statements

> <ListStatements200Response> list_statements(opts)

List statements

List statement resources. Filtering and paging can be applied.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::StatementsApi.new
opts = {
  page_limit: 'page_limit_example', # String | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
  page_offset: 'page_offset_example', # String | Number of resources to skip. See Pagination.
  filter_account_id: 'filter_account_id_example', # String | Optional. Filters the results by the specified account id.
  filter_account_ids: 'filter_account_ids_example', # String | Optional. Filters the results by the specified account ids. Usage example: *filter[accountIds][0]=10000&filter[accountIds][1]=10001*
  filter_customer_id: 'filter_customer_id_example', # String | Optional. Filters the results by the specified customer id.
  filter_period: 'filter_period_example', # String | Optional. Filters the results for a specific month. e.g. 2021-01
  sort: 'sort_example' # String | Optional. Leave empty or provide sort=period for ascending order. Provide sort=-period (leading minus sign) for descending order.
}

begin
  # List statements
  result = api_instance.list_statements(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling StatementsApi->list_statements: #{e}"
end
```

#### Using the list_statements_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListStatements200Response>, Integer, Hash)> list_statements_with_http_info(opts)

```ruby
begin
  # List statements
  data, status_code, headers = api_instance.list_statements_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListStatements200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling StatementsApi->list_statements_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Number of resources to skip. See Pagination. | [optional][default to &#39;0&#39;] |
| **filter_account_id** | **String** | Optional. Filters the results by the specified account id. | [optional] |
| **filter_account_ids** | **String** | Optional. Filters the results by the specified account ids. Usage example: *filter[accountIds][0]&#x3D;10000&amp;filter[accountIds][1]&#x3D;10001* | [optional] |
| **filter_customer_id** | **String** | Optional. Filters the results by the specified customer id. | [optional] |
| **filter_period** | **String** | Optional. Filters the results for a specific month. e.g. 2021-01 | [optional] |
| **sort** | **String** | Optional. Leave empty or provide sort&#x3D;period for ascending order. Provide sort&#x3D;-period (leading minus sign) for descending order. | [optional][default to &#39;period&#39;] |

### Return type

[**ListStatements200Response**](ListStatements200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

