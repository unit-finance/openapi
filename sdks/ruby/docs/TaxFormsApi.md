# UnitFinanceSdk::TaxFormsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_tax_form_by_id**](TaxFormsApi.md#get_tax_form_by_id) | **GET** /tax-forms/{id} | Get a tax form by id |
| [**get_tax_form_pdf_by_id**](TaxFormsApi.md#get_tax_form_pdf_by_id) | **GET** /tax-forms/{id}/pdf | Get a tax form PDF by id |
| [**list_tax_forms**](TaxFormsApi.md#list_tax_forms) | **GET** /tax-forms | List tax forms |


## get_tax_form_by_id

> <GetTaxFormById200Response> get_tax_form_by_id(id)

Get a tax form by id

Get a tax form by id.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::TaxFormsApi.new
id = 'id_example' # String | 

begin
  # Get a tax form by id
  result = api_instance.get_tax_form_by_id(id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling TaxFormsApi->get_tax_form_by_id: #{e}"
end
```

#### Using the get_tax_form_by_id_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetTaxFormById200Response>, Integer, Hash)> get_tax_form_by_id_with_http_info(id)

```ruby
begin
  # Get a tax form by id
  data, status_code, headers = api_instance.get_tax_form_by_id_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetTaxFormById200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling TaxFormsApi->get_tax_form_by_id_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |

### Return type

[**GetTaxFormById200Response**](GetTaxFormById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## get_tax_form_pdf_by_id

> File get_tax_form_pdf_by_id(id)

Get a tax form PDF by id

Get a tax form PDF file by id.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::TaxFormsApi.new
id = 'id_example' # String | 

begin
  # Get a tax form PDF by id
  result = api_instance.get_tax_form_pdf_by_id(id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling TaxFormsApi->get_tax_form_pdf_by_id: #{e}"
end
```

#### Using the get_tax_form_pdf_by_id_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(File, Integer, Hash)> get_tax_form_pdf_by_id_with_http_info(id)

```ruby
begin
  # Get a tax form PDF by id
  data, status_code, headers = api_instance.get_tax_form_pdf_by_id_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => File
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling TaxFormsApi->get_tax_form_pdf_by_id_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |

### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/pdf, application/vnd.api+json


## list_tax_forms

> <ListTaxForms200Response> list_tax_forms

List tax forms

List tax form resources per tax year. Filtering and paging can be applied.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::TaxFormsApi.new

begin
  # List tax forms
  result = api_instance.list_tax_forms
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling TaxFormsApi->list_tax_forms: #{e}"
end
```

#### Using the list_tax_forms_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListTaxForms200Response>, Integer, Hash)> list_tax_forms_with_http_info

```ruby
begin
  # List tax forms
  data, status_code, headers = api_instance.list_tax_forms_with_http_info
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListTaxForms200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling TaxFormsApi->list_tax_forms_with_http_info: #{e}"
end
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**ListTaxForms200Response**](ListTaxForms200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

