# UnitFinanceSdk::PaymentsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**cancel_payment**](PaymentsApi.md#cancel_payment) | **POST** /payments/{paymentId}/cancel | Cancel a payment |
| [**clear_ach_debit_payment**](PaymentsApi.md#clear_ach_debit_payment) | **POST** /payments/{paymentId}/clear | Clear an ACH debit payment |
| [**create_batch_releases**](PaymentsApi.md#create_batch_releases) | **POST** /batch-releases | Create batch releases |
| [**create_bulk_payment**](PaymentsApi.md#create_bulk_payment) | **POST** /payments/bulk | Create a bulk payment |
| [**create_payment**](PaymentsApi.md#create_payment) | **POST** /payments | Create a payment |
| [**create_recurring_payment**](PaymentsApi.md#create_recurring_payment) | **POST** /recurring-payments | Create a recurring payment |
| [**delete_recurring_payment**](PaymentsApi.md#delete_recurring_payment) | **DELETE** /recurring-payments/{id} | Delete a recurring payment |
| [**disable_recurring_payment**](PaymentsApi.md#disable_recurring_payment) | **POST** /recurring-payments/{id}/disable | Disable a recurring payment |
| [**enable_recurring_payment**](PaymentsApi.md#enable_recurring_payment) | **POST** /recurring-payments/{id}/enable | Enable a recurring payment |
| [**generate_cash_deposit_barcode**](PaymentsApi.md#generate_cash_deposit_barcode) | **POST** /cash-deposits/barcodes | Generate a cash deposit barcode |
| [**get_cash_deposit_barcode_image**](PaymentsApi.md#get_cash_deposit_barcode_image) | **GET** /cash-deposits/barcodes/{barcodeNumber}/image | Get a cash deposit barcode image |
| [**get_expected_ach_completion_date**](PaymentsApi.md#get_expected_ach_completion_date) | **POST** /payments/ach/expected-completion-date | Get expected ACH completion date |
| [**get_received_payment**](PaymentsApi.md#get_received_payment) | **GET** /received-payments/{id} | Get a received payment by id |
| [**get_recurring_payment**](PaymentsApi.md#get_recurring_payment) | **GET** /recurring-payments/{id} | Get a recurring payment by id |
| [**get_wire_drawdown**](PaymentsApi.md#get_wire_drawdown) | **GET** /wire-drawdowns/{id} | Get a wire drawdown by id |
| [**list_received_payments**](PaymentsApi.md#list_received_payments) | **GET** /received-payments | List received payments |
| [**list_recurring_payments**](PaymentsApi.md#list_recurring_payments) | **GET** /recurring-payments | List recurring payments |
| [**list_store_locations**](PaymentsApi.md#list_store_locations) | **GET** /store-locations | List cash deposit store locations |
| [**list_wire_drawdowns**](PaymentsApi.md#list_wire_drawdowns) | **GET** /wire-drawdowns | List wire drawdowns |
| [**send_drawdown_payment**](PaymentsApi.md#send_drawdown_payment) | **POST** /wire-drawdowns/{id}/send | Send a drawdown payment |
| [**update_payment**](PaymentsApi.md#update_payment) | **PATCH** /payments/{paymentId} | Update a payment |
| [**update_received_payment**](PaymentsApi.md#update_received_payment) | **PATCH** /received-payments/{id} | Update a received payment |


## cancel_payment

> <CancelPayment200Response> cancel_payment(payment_id, opts)

Cancel a payment

Cancel a previously created ACH or Wire payment. Only payments with status Pending or PendingReview can be canceled. The response is one of ACHPayment or WirePayment, discriminated by data.type.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PaymentsApi.new
payment_id = 'payment_id_example' # String | 
opts = {
  body: { ... } # Object | 
}

begin
  # Cancel a payment
  result = api_instance.cancel_payment(payment_id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->cancel_payment: #{e}"
end
```

#### Using the cancel_payment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CancelPayment200Response>, Integer, Hash)> cancel_payment_with_http_info(payment_id, opts)

```ruby
begin
  # Cancel a payment
  data, status_code, headers = api_instance.cancel_payment_with_http_info(payment_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CancelPayment200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->cancel_payment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **payment_id** | **String** |  |  |
| **body** | **Object** |  | [optional] |

### Return type

[**CancelPayment200Response**](CancelPayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## clear_ach_debit_payment

> <ClearAchDebitPayment200Response> clear_ach_debit_payment(payment_id, opts)

Clear an ACH debit payment

Clears an ACH debit payment while in clearing status. Overrides the original clearing period, making funds available immediately. Requires the Dynamic Clearing Period feature to be enabled.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PaymentsApi.new
payment_id = 'payment_id_example' # String | 
opts = {
  body: { ... } # Object | 
}

begin
  # Clear an ACH debit payment
  result = api_instance.clear_ach_debit_payment(payment_id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->clear_ach_debit_payment: #{e}"
end
```

#### Using the clear_ach_debit_payment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ClearAchDebitPayment200Response>, Integer, Hash)> clear_ach_debit_payment_with_http_info(payment_id, opts)

```ruby
begin
  # Clear an ACH debit payment
  data, status_code, headers = api_instance.clear_ach_debit_payment_with_http_info(payment_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ClearAchDebitPayment200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->clear_ach_debit_payment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **payment_id** | **String** |  |  |
| **body** | **Object** |  | [optional] |

### Return type

[**ClearAchDebitPayment200Response**](ClearAchDebitPayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## create_batch_releases

> <CreateBatchReleases201Response> create_batch_releases(create_batch_releases_request)

Create batch releases

Release is the act of splitting a single batch payment between multiple customer accounts in your organization. When creating releases, you are required to provide compliance information for the original senders of the funds.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PaymentsApi.new
create_batch_releases_request = UnitFinanceSdk::CreateBatchReleasesRequest.new({data: UnitFinanceSdk::CreateBatchReleasesData.new({type: 'batchRelease', attributes: UnitFinanceSdk::CreateBatchReleasesDataAttributes.new({amount: 37, description: 'description_example', sender_name: 'sender_name_example', sender_address: UnitFinanceSdk::AddressType.new({street: 'street_example', city: 'city_example', state: 'state_example', postal_code: 'postal_code_example', country: 'country_example'}), sender_account_number: 'sender_account_number_example'})})}) # CreateBatchReleasesRequest | 

begin
  # Create batch releases
  result = api_instance.create_batch_releases(create_batch_releases_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->create_batch_releases: #{e}"
end
```

#### Using the create_batch_releases_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateBatchReleases201Response>, Integer, Hash)> create_batch_releases_with_http_info(create_batch_releases_request)

```ruby
begin
  # Create batch releases
  data, status_code, headers = api_instance.create_batch_releases_with_http_info(create_batch_releases_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateBatchReleases201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->create_batch_releases_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_batch_releases_request** | [**CreateBatchReleasesRequest**](CreateBatchReleasesRequest.md) |  |  |

### Return type

[**CreateBatchReleases201Response**](CreateBatchReleases201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## create_bulk_payment

> <CreateBulkPayment201Response> create_bulk_payment(create_bulk_payment_request)

Create a bulk payment

Creates multiple payments in a single asynchronous request. Each element of data is a payment creation payload — ACH, Book, and Wire types may be mixed in the same bulk.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PaymentsApi.new
create_bulk_payment_request = UnitFinanceSdk::CreateBulkPaymentRequest.new({data: [UnitFinanceSdk::CreateABookPaymentData.new({type: 'bookPayment', attributes: UnitFinanceSdk::CreateABookPaymentDataAttributes.new({amount: 10000, description: 'Funding'}), relationships: UnitFinanceSdk::CreateABookPaymentDataRelationships.new({account: UnitFinanceSdk::Relationship.new, counterparty_account: UnitFinanceSdk::Relationship.new})})]}) # CreateBulkPaymentRequest | 

begin
  # Create a bulk payment
  result = api_instance.create_bulk_payment(create_bulk_payment_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->create_bulk_payment: #{e}"
end
```

#### Using the create_bulk_payment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateBulkPayment201Response>, Integer, Hash)> create_bulk_payment_with_http_info(create_bulk_payment_request)

```ruby
begin
  # Create a bulk payment
  data, status_code, headers = api_instance.create_bulk_payment_with_http_info(create_bulk_payment_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateBulkPayment201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->create_bulk_payment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_bulk_payment_request** | [**CreateBulkPaymentRequest**](CreateBulkPaymentRequest.md) |  |  |

### Return type

[**CreateBulkPayment201Response**](CreateBulkPayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## create_payment

> <CreatePayment201Response> create_payment(create_payment_request)

Create a payment

Originate a payment. The request body is one of CreateACHPaymentRequest, CreateACHPaymentExistingCounterpartyRequest, CreateACHPaymentPlaidTokenRequest, CreateABookPaymentRequest, or CreateAWirePaymentRequest, discriminated by data.type (achPayment, bookPayment, wirePayment).

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PaymentsApi.new
create_payment_request = UnitFinanceSdk::CreateABookPaymentRequest.new({data: UnitFinanceSdk::CreateABookPaymentData.new({type: 'bookPayment', attributes: UnitFinanceSdk::CreateABookPaymentDataAttributes.new({amount: 10000, description: 'Funding'}), relationships: UnitFinanceSdk::CreateABookPaymentDataRelationships.new({account: UnitFinanceSdk::Relationship.new, counterparty_account: UnitFinanceSdk::Relationship.new})})}) # CreatePaymentRequest | 

begin
  # Create a payment
  result = api_instance.create_payment(create_payment_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->create_payment: #{e}"
end
```

#### Using the create_payment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreatePayment201Response>, Integer, Hash)> create_payment_with_http_info(create_payment_request)

```ruby
begin
  # Create a payment
  data, status_code, headers = api_instance.create_payment_with_http_info(create_payment_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreatePayment201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->create_payment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_payment_request** | [**CreatePaymentRequest**](CreatePaymentRequest.md) |  |  |

### Return type

[**CreatePayment201Response**](CreatePayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## create_recurring_payment

> <CreateRecurringPayment201Response> create_recurring_payment(create_recurring_payment_request)

Create a recurring payment

Originate a recurring payment. The request body is one of CreateRecurringCreditACHPaymentRequest, CreateRecurringCreditBookPaymentRequest, or CreateRecurringDebitACHPaymentRequest, discriminated by data.type (recurringCreditAchPayment, recurringCreditBookPayment, recurringDebitAchPayment).

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PaymentsApi.new
create_recurring_payment_request = UnitFinanceSdk::CreateRecurringCreditACHPaymentRequest.new({data: UnitFinanceSdk::CreateRecurringCreditACHPaymentData.new({type: 'recurringCreditAchPayment', attributes: UnitFinanceSdk::CreateRecurringCreditACHPaymentDataAttributes.new({amount: 1000, description: 'Rent-Apt15', schedule: UnitFinanceSdk::CreateScheduleType.new({interval: 'interval_example'})}), relationships: UnitFinanceSdk::CreateACHPaymentExistingCounterpartyDataRelationships.new({account: UnitFinanceSdk::Relationship.new, counterparty: UnitFinanceSdk::Relationship.new})})}) # CreateRecurringPaymentRequest | 

begin
  # Create a recurring payment
  result = api_instance.create_recurring_payment(create_recurring_payment_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->create_recurring_payment: #{e}"
end
```

#### Using the create_recurring_payment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateRecurringPayment201Response>, Integer, Hash)> create_recurring_payment_with_http_info(create_recurring_payment_request)

```ruby
begin
  # Create a recurring payment
  data, status_code, headers = api_instance.create_recurring_payment_with_http_info(create_recurring_payment_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateRecurringPayment201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->create_recurring_payment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_recurring_payment_request** | [**CreateRecurringPaymentRequest**](CreateRecurringPaymentRequest.md) |  |  |

### Return type

[**CreateRecurringPayment201Response**](CreateRecurringPayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## delete_recurring_payment

> <CreateRecurringPayment201Response> delete_recurring_payment(id, opts)

Delete a recurring payment

Delete a Recurring Payment by id. When a Recurring Payment is deleted, the Recurring Payment Status Changed webhook event is fired and future payments will no longer be created according to the defined schedule.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PaymentsApi.new
id = 'id_example' # String | 
opts = {
  body: { ... } # Object | 
}

begin
  # Delete a recurring payment
  result = api_instance.delete_recurring_payment(id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->delete_recurring_payment: #{e}"
end
```

#### Using the delete_recurring_payment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateRecurringPayment201Response>, Integer, Hash)> delete_recurring_payment_with_http_info(id, opts)

```ruby
begin
  # Delete a recurring payment
  data, status_code, headers = api_instance.delete_recurring_payment_with_http_info(id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateRecurringPayment201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->delete_recurring_payment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **body** | **Object** |  | [optional] |

### Return type

[**CreateRecurringPayment201Response**](CreateRecurringPayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## disable_recurring_payment

> <CreateRecurringPayment201Response> disable_recurring_payment(id, opts)

Disable a recurring payment

Disable a Recurring Payment by id. When a Recurring Payment is disabled, the Recurring Payment Status Changed webhook event is fired and future payments will no longer be created according to the defined schedule.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PaymentsApi.new
id = 'id_example' # String | 
opts = {
  body: { ... } # Object | 
}

begin
  # Disable a recurring payment
  result = api_instance.disable_recurring_payment(id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->disable_recurring_payment: #{e}"
end
```

#### Using the disable_recurring_payment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateRecurringPayment201Response>, Integer, Hash)> disable_recurring_payment_with_http_info(id, opts)

```ruby
begin
  # Disable a recurring payment
  data, status_code, headers = api_instance.disable_recurring_payment_with_http_info(id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateRecurringPayment201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->disable_recurring_payment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **body** | **Object** |  | [optional] |

### Return type

[**CreateRecurringPayment201Response**](CreateRecurringPayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## enable_recurring_payment

> <CreateRecurringPayment201Response> enable_recurring_payment(id, opts)

Enable a recurring payment

Enable a recurring payment by id. When a Recurring Payment is enabled, its status is set to Active/Completed according to the start date and end date that were defined in the schedule. See Recurring Payment Statuses. When enabled, the Recurring Payment Status Changed webhook event is fired.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PaymentsApi.new
id = 'id_example' # String | 
opts = {
  body: { ... } # Object | 
}

begin
  # Enable a recurring payment
  result = api_instance.enable_recurring_payment(id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->enable_recurring_payment: #{e}"
end
```

#### Using the enable_recurring_payment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateRecurringPayment201Response>, Integer, Hash)> enable_recurring_payment_with_http_info(id, opts)

```ruby
begin
  # Enable a recurring payment
  data, status_code, headers = api_instance.enable_recurring_payment_with_http_info(id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateRecurringPayment201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->enable_recurring_payment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **body** | **Object** |  | [optional] |

### Return type

[**CreateRecurringPayment201Response**](CreateRecurringPayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## generate_cash_deposit_barcode

> <GenerateCashDepositBarcode200Response> generate_cash_deposit_barcode(generate_cash_deposit_barcode_request)

Generate a cash deposit barcode

Generate a barcode for a Cash Deposit store location.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PaymentsApi.new
generate_cash_deposit_barcode_request = UnitFinanceSdk::GenerateCashDepositBarcodeRequest.new({data: UnitFinanceSdk::GenerateBarcodeData.new({type: 'cashDepositBarcode', attributes: UnitFinanceSdk::GenerateBarcodeDataAttributes.new({store_id: '2438'}), relationships: UnitFinanceSdk::GenerateBarcodeDataRelationships.new({customer: UnitFinanceSdk::Relationship.new, account: UnitFinanceSdk::Relationship.new})})}) # GenerateCashDepositBarcodeRequest | 

begin
  # Generate a cash deposit barcode
  result = api_instance.generate_cash_deposit_barcode(generate_cash_deposit_barcode_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->generate_cash_deposit_barcode: #{e}"
end
```

#### Using the generate_cash_deposit_barcode_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GenerateCashDepositBarcode200Response>, Integer, Hash)> generate_cash_deposit_barcode_with_http_info(generate_cash_deposit_barcode_request)

```ruby
begin
  # Generate a cash deposit barcode
  data, status_code, headers = api_instance.generate_cash_deposit_barcode_with_http_info(generate_cash_deposit_barcode_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GenerateCashDepositBarcode200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->generate_cash_deposit_barcode_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **generate_cash_deposit_barcode_request** | [**GenerateCashDepositBarcodeRequest**](GenerateCashDepositBarcodeRequest.md) |  |  |

### Return type

[**GenerateCashDepositBarcode200Response**](GenerateCashDepositBarcode200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## get_cash_deposit_barcode_image

> File get_cash_deposit_barcode_image(barcode_number)

Get a cash deposit barcode image

Get a cash deposit barcode image by barcode number.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PaymentsApi.new
barcode_number = 'barcode_number_example' # String | The unique barcodeNumber identifier of a barcode, obtained from Generate Barcode endpoint.

begin
  # Get a cash deposit barcode image
  result = api_instance.get_cash_deposit_barcode_image(barcode_number)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->get_cash_deposit_barcode_image: #{e}"
end
```

#### Using the get_cash_deposit_barcode_image_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(File, Integer, Hash)> get_cash_deposit_barcode_image_with_http_info(barcode_number)

```ruby
begin
  # Get a cash deposit barcode image
  data, status_code, headers = api_instance.get_cash_deposit_barcode_image_with_http_info(barcode_number)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => File
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->get_cash_deposit_barcode_image_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **barcode_number** | **String** | The unique barcodeNumber identifier of a barcode, obtained from Generate Barcode endpoint. |  |

### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/png, application/vnd.api+json


## get_expected_ach_completion_date

> <GetExpectedAchCompletionDate200Response> get_expected_ach_completion_date(get_expected_ach_completion_date_request)

Get expected ACH completion date

Returns the expected completion or settlement date for an ACH payment before creating it. Use this endpoint to display estimated timelines to end users without initiating a payment.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PaymentsApi.new
get_expected_ach_completion_date_request = UnitFinanceSdk::GetExpectedAchCompletionDateRequest.new({data: UnitFinanceSdk::GetExpectedACHCompletionDateData.new({type: 'achExpectedCompletionDate', attributes: UnitFinanceSdk::GetExpectedACHCompletionDateDataAttributes.new({direction: 'Credit', amount: 10000}), relationships: UnitFinanceSdk::CreateFeeDataRelationships.new({account: UnitFinanceSdk::Relationship.new})})}) # GetExpectedAchCompletionDateRequest | 

begin
  # Get expected ACH completion date
  result = api_instance.get_expected_ach_completion_date(get_expected_ach_completion_date_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->get_expected_ach_completion_date: #{e}"
end
```

#### Using the get_expected_ach_completion_date_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetExpectedAchCompletionDate200Response>, Integer, Hash)> get_expected_ach_completion_date_with_http_info(get_expected_ach_completion_date_request)

```ruby
begin
  # Get expected ACH completion date
  data, status_code, headers = api_instance.get_expected_ach_completion_date_with_http_info(get_expected_ach_completion_date_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetExpectedAchCompletionDate200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->get_expected_ach_completion_date_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **get_expected_ach_completion_date_request** | [**GetExpectedAchCompletionDateRequest**](GetExpectedAchCompletionDateRequest.md) |  |  |

### Return type

[**GetExpectedAchCompletionDate200Response**](GetExpectedAchCompletionDate200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## get_received_payment

> <GetReceivedPayment200Response> get_received_payment(id, opts)

Get a received payment by id

Get a received payment by id.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PaymentsApi.new
id = 'id_example' # String | 
opts = {
  include: 'include_example' # String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources.
}

begin
  # Get a received payment by id
  result = api_instance.get_received_payment(id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->get_received_payment: #{e}"
end
```

#### Using the get_received_payment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetReceivedPayment200Response>, Integer, Hash)> get_received_payment_with_http_info(id, opts)

```ruby
begin
  # Get a received payment by id
  data, status_code, headers = api_instance.get_received_payment_with_http_info(id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetReceivedPayment200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->get_received_payment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **include** | **String** | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources. | [optional] |

### Return type

[**GetReceivedPayment200Response**](GetReceivedPayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## get_recurring_payment

> <CreateRecurringPayment201Response> get_recurring_payment(id)

Get a recurring payment by id

Get a recurring payment by id.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PaymentsApi.new
id = 'id_example' # String | 

begin
  # Get a recurring payment by id
  result = api_instance.get_recurring_payment(id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->get_recurring_payment: #{e}"
end
```

#### Using the get_recurring_payment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateRecurringPayment201Response>, Integer, Hash)> get_recurring_payment_with_http_info(id)

```ruby
begin
  # Get a recurring payment by id
  data, status_code, headers = api_instance.get_recurring_payment_with_http_info(id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateRecurringPayment201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->get_recurring_payment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |

### Return type

[**CreateRecurringPayment201Response**](CreateRecurringPayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## get_wire_drawdown

> <GetWireDrawdown200Response> get_wire_drawdown(id, opts)

Get a wire drawdown by id

Get a wire drawdown by id.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PaymentsApi.new
id = 'id_example' # String | 
opts = {
  include: 'include_example' # String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources.
}

begin
  # Get a wire drawdown by id
  result = api_instance.get_wire_drawdown(id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->get_wire_drawdown: #{e}"
end
```

#### Using the get_wire_drawdown_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetWireDrawdown200Response>, Integer, Hash)> get_wire_drawdown_with_http_info(id, opts)

```ruby
begin
  # Get a wire drawdown by id
  data, status_code, headers = api_instance.get_wire_drawdown_with_http_info(id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetWireDrawdown200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->get_wire_drawdown_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **include** | **String** | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources. | [optional] |

### Return type

[**GetWireDrawdown200Response**](GetWireDrawdown200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## list_received_payments

> <ListReceivedPayments200Response> list_received_payments(opts)

List received payments

List received payments. Filtering, paging and sorting can be applied.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PaymentsApi.new
opts = {
  page_limit: 'page_limit_example', # String | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
  page_offset: 'page_offset_example', # String | Number of resources to skip. See Pagination.
  filter_account_id: 'filter_account_id_example', # String | Optional. Filters the results by the specified account id.
  filter_customer_id: 'filter_customer_id_example', # String | Optional. Filters the results by the specified customer id.
  filter_since: 'filter_since_example', # String | Optional. Filters before the specified date. e.g. 2021-06-01
  filter_until: 'filter_until_example', # String | Optional. Filters after the specified date. e.g. 2021-07-01
  filter_status: 'filter_status_example', # String | Optional. Filter Received Payments by status. Usage example: filter[status][0]=Pending&filter[status][1]=Advanced. Can't be stated with includeCompleted.
  filter_from_amount: 'filter_from_amount_example', # String | Optional. Filters the Received Payment that have an amount that is higher or equal to the specified amount (in cents). e.g. 5000
  filter_to_amount: 'filter_to_amount_example', # String | Optional. Filters the Received Payment that have an amount that is lower or equal to the specified amount (in cents). e.g. 7000
  filter_include_completed: 'filter_include_completed_example', # String | Optional. Filter to include ReceivedPayment with Status 'Completed', default False. Can't be stated with filter[status][].
  filter_can_be_reprocessed: 'filter_can_be_reprocessed_example', # String | Optional. If set to true, returns only Received Payments that can be reprocessed. If set to false only returns Received Payments that can't be reprocessed.
  filter_type: 'filter_type_example', # String | Optional. Filter received payments by type. Valid values: Ach, Wire, Realtime. Defaults to Ach, Wire, and Realtime if not specified.
  filter_tags: 'filter_tags_example', # String | Optional. Filter received payments by Tags.
  sort: 'sort_example', # String | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order.
  include: 'include_example' # String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources.
}

begin
  # List received payments
  result = api_instance.list_received_payments(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->list_received_payments: #{e}"
end
```

#### Using the list_received_payments_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListReceivedPayments200Response>, Integer, Hash)> list_received_payments_with_http_info(opts)

```ruby
begin
  # List received payments
  data, status_code, headers = api_instance.list_received_payments_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListReceivedPayments200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->list_received_payments_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Number of resources to skip. See Pagination. | [optional][default to &#39;0&#39;] |
| **filter_account_id** | **String** | Optional. Filters the results by the specified account id. | [optional] |
| **filter_customer_id** | **String** | Optional. Filters the results by the specified customer id. | [optional] |
| **filter_since** | **String** | Optional. Filters before the specified date. e.g. 2021-06-01 | [optional] |
| **filter_until** | **String** | Optional. Filters after the specified date. e.g. 2021-07-01 | [optional] |
| **filter_status** | **String** | Optional. Filter Received Payments by status. Usage example: filter[status][0]&#x3D;Pending&amp;filter[status][1]&#x3D;Advanced. Can&#39;t be stated with includeCompleted. | [optional] |
| **filter_from_amount** | **String** | Optional. Filters the Received Payment that have an amount that is higher or equal to the specified amount (in cents). e.g. 5000 | [optional] |
| **filter_to_amount** | **String** | Optional. Filters the Received Payment that have an amount that is lower or equal to the specified amount (in cents). e.g. 7000 | [optional] |
| **filter_include_completed** | **String** | Optional. Filter to include ReceivedPayment with Status &#39;Completed&#39;, default False. Can&#39;t be stated with filter[status][]. | [optional] |
| **filter_can_be_reprocessed** | **String** | Optional. If set to true, returns only Received Payments that can be reprocessed. If set to false only returns Received Payments that can&#39;t be reprocessed. | [optional] |
| **filter_type** | **String** | Optional. Filter received payments by type. Valid values: Ach, Wire, Realtime. Defaults to Ach, Wire, and Realtime if not specified. | [optional] |
| **filter_tags** | **String** | Optional. Filter received payments by Tags. | [optional] |
| **sort** | **String** | Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional][default to &#39;createdAt&#39;] |
| **include** | **String** | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources. | [optional] |

### Return type

[**ListReceivedPayments200Response**](ListReceivedPayments200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## list_recurring_payments

> <ListRecurringPayments200Response> list_recurring_payments(opts)

List recurring payments

List recurring payments resources. Filtering, paging and sorting can be applied.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PaymentsApi.new
opts = {
  page_limit: 'page_limit_example', # String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
  page_offset: 'page_offset_example', # String | Optional. Number of resources to skip. See Pagination.
  filter_account_id: 'filter_account_id_example', # String | Optional. Filters the results by the specified account id.
  filter_customer_id: 'filter_customer_id_example', # String | Optional. Filters the results by the specified customer id.
  filter_status: 'filter_status_example', # String | Optional. Filter recurring payments by status (Active, Completed or Disabled). Usage example: filter[status][0]=Active
  filter_type: 'filter_type_example', # String | Optional. Filter recurring payments by Recurring Payment type, such as RecurringCreditAchPayment, RecurringCreditBookPayment. Usage example: filter[type][0]=RecurringCreditAchPayment&filter[type][1]=RecurringCreditBookPayment
  filter_from_start_time: 'filter_from_start_time_example', # String | Optional. Filters the Recurring Payments that their start time occurred after the specified date. e.g. 2022-06-13
  filter_to_start_time: 'filter_to_start_time_example', # String | Optional. Filters the Recurring Payments that their start time occurred before the specified date. e.g. 2022-05-13
  filter_from_end_time: 'filter_from_end_time_example', # String | Optional. Filters the Recurring Payments that their end time occurred after the specified date. e.g. 2022-06-13
  filter_to_end_time: 'filter_to_end_time_example', # String | Optional. Filters the Recurring Payments that their end time occurred before the specified date. e.g. 2022-05-13
  sort: 'sort_example' # String | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order.
}

begin
  # List recurring payments
  result = api_instance.list_recurring_payments(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->list_recurring_payments: #{e}"
end
```

#### Using the list_recurring_payments_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListRecurringPayments200Response>, Integer, Hash)> list_recurring_payments_with_http_info(opts)

```ruby
begin
  # List recurring payments
  data, status_code, headers = api_instance.list_recurring_payments_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListRecurringPayments200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->list_recurring_payments_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Optional. Number of resources to skip. See Pagination. | [optional][default to &#39;0&#39;] |
| **filter_account_id** | **String** | Optional. Filters the results by the specified account id. | [optional] |
| **filter_customer_id** | **String** | Optional. Filters the results by the specified customer id. | [optional] |
| **filter_status** | **String** | Optional. Filter recurring payments by status (Active, Completed or Disabled). Usage example: filter[status][0]&#x3D;Active | [optional] |
| **filter_type** | **String** | Optional. Filter recurring payments by Recurring Payment type, such as RecurringCreditAchPayment, RecurringCreditBookPayment. Usage example: filter[type][0]&#x3D;RecurringCreditAchPayment&amp;filter[type][1]&#x3D;RecurringCreditBookPayment | [optional] |
| **filter_from_start_time** | **String** | Optional. Filters the Recurring Payments that their start time occurred after the specified date. e.g. 2022-06-13 | [optional] |
| **filter_to_start_time** | **String** | Optional. Filters the Recurring Payments that their start time occurred before the specified date. e.g. 2022-05-13 | [optional] |
| **filter_from_end_time** | **String** | Optional. Filters the Recurring Payments that their end time occurred after the specified date. e.g. 2022-06-13 | [optional] |
| **filter_to_end_time** | **String** | Optional. Filters the Recurring Payments that their end time occurred before the specified date. e.g. 2022-05-13 | [optional] |
| **sort** | **String** | Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional][default to &#39;-createdAt&#39;] |

### Return type

[**ListRecurringPayments200Response**](ListRecurringPayments200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## list_store_locations

> <ListStoreLocations200Response> list_store_locations(opts)

List cash deposit store locations

List Cash Deposit store locations by coordinates or by postal code.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PaymentsApi.new
opts = {
  filter_coordinates: 'filter_coordinates_example', # String | Filters the results by the specified coordinates.
  filter_postal_code: 'filter_postal_code_example', # String | Filters the results by the specified postal code.
  filter_service_type: 'filter_service_type_example', # String | Optional. Filters the results by the specified service type. Possible values are: Swipe, Barcode.
  page_limit: 'page_limit_example', # String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
  page_offset: 'page_offset_example' # String | Optional. Number of resources to skip. See Pagination.
}

begin
  # List cash deposit store locations
  result = api_instance.list_store_locations(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->list_store_locations: #{e}"
end
```

#### Using the list_store_locations_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListStoreLocations200Response>, Integer, Hash)> list_store_locations_with_http_info(opts)

```ruby
begin
  # List cash deposit store locations
  data, status_code, headers = api_instance.list_store_locations_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListStoreLocations200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->list_store_locations_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **filter_coordinates** | **String** | Filters the results by the specified coordinates. | [optional] |
| **filter_postal_code** | **String** | Filters the results by the specified postal code. | [optional] |
| **filter_service_type** | **String** | Optional. Filters the results by the specified service type. Possible values are: Swipe, Barcode. | [optional][default to &#39;Swipe&#39;] |
| **page_limit** | **String** | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Optional. Number of resources to skip. See Pagination. | [optional][default to &#39;0&#39;] |

### Return type

[**ListStoreLocations200Response**](ListStoreLocations200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## list_wire_drawdowns

> <ListWireDrawdowns200Response> list_wire_drawdowns(opts)

List wire drawdowns

List wire drawdowns resources. Filtering and paging can be applied.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PaymentsApi.new
opts = {
  page_limit: 'page_limit_example', # String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
  page_offset: 'page_offset_example', # String | Optional. Number of resources to skip. See Pagination.
  filter_account_id: 'filter_account_id_example', # String | Optional. Filters the results by the specified account id.
  filter_customer_id: 'filter_customer_id_example', # String | Optional. Filters the results by the specified customer id.
  include: 'include_example' # String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources.
}

begin
  # List wire drawdowns
  result = api_instance.list_wire_drawdowns(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->list_wire_drawdowns: #{e}"
end
```

#### Using the list_wire_drawdowns_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListWireDrawdowns200Response>, Integer, Hash)> list_wire_drawdowns_with_http_info(opts)

```ruby
begin
  # List wire drawdowns
  data, status_code, headers = api_instance.list_wire_drawdowns_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListWireDrawdowns200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->list_wire_drawdowns_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Optional. Number of resources to skip. See Pagination. | [optional][default to &#39;0&#39;] |
| **filter_account_id** | **String** | Optional. Filters the results by the specified account id. | [optional] |
| **filter_customer_id** | **String** | Optional. Filters the results by the specified customer id. | [optional] |
| **include** | **String** | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources. | [optional] |

### Return type

[**ListWireDrawdowns200Response**](ListWireDrawdowns200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## send_drawdown_payment

> <SendDrawdownPayment200Response> send_drawdown_payment(id, send_drawdown_payment_request)

Send a drawdown payment

Send a wire payment in response to a drawdown request. The API will create a Wire Payment as a response to the drawdown request. You can observe the drawdownPayment relationship to retrieve the Payment Identifier.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PaymentsApi.new
id = 'id_example' # String | 
send_drawdown_payment_request = UnitFinanceSdk::SendDrawdownPaymentRequest.new({data: UnitFinanceSdk::SendDrawdownPaymentData.new({type: 'sendWireDrawdown', attributes: UnitFinanceSdk::SendDrawdownPaymentDataAttributes.new({idempotency_key: '6a1a33be-4e12-4603-9ed0-820922389fb9'})})}) # SendDrawdownPaymentRequest | 

begin
  # Send a drawdown payment
  result = api_instance.send_drawdown_payment(id, send_drawdown_payment_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->send_drawdown_payment: #{e}"
end
```

#### Using the send_drawdown_payment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<SendDrawdownPayment200Response>, Integer, Hash)> send_drawdown_payment_with_http_info(id, send_drawdown_payment_request)

```ruby
begin
  # Send a drawdown payment
  data, status_code, headers = api_instance.send_drawdown_payment_with_http_info(id, send_drawdown_payment_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <SendDrawdownPayment200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->send_drawdown_payment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **send_drawdown_payment_request** | [**SendDrawdownPaymentRequest**](SendDrawdownPaymentRequest.md) |  |  |

### Return type

[**SendDrawdownPayment200Response**](SendDrawdownPayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## update_payment

> <UpdatePayment200Response> update_payment(payment_id, update_payment_request)

Update a payment

Update a payment. The request body is one of UpdateACHPaymentRequest or UpdateBookPaymentRequest, discriminated by data.type (achPayment, bookPayment).

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PaymentsApi.new
payment_id = 'payment_id_example' # String | 
update_payment_request = UnitFinanceSdk::UpdateACHPaymentRequest.new({data: UnitFinanceSdk::UpdateACHPaymentData.new({type: 'achPayment', attributes: UnitFinanceSdk::UpdateACHPaymentDataAttributes.new({tags: { key: 3.56}, clearing_days_override: 3})})}) # UpdatePaymentRequest | 

begin
  # Update a payment
  result = api_instance.update_payment(payment_id, update_payment_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->update_payment: #{e}"
end
```

#### Using the update_payment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<UpdatePayment200Response>, Integer, Hash)> update_payment_with_http_info(payment_id, update_payment_request)

```ruby
begin
  # Update a payment
  data, status_code, headers = api_instance.update_payment_with_http_info(payment_id, update_payment_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <UpdatePayment200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->update_payment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **payment_id** | **String** |  |  |
| **update_payment_request** | [**UpdatePaymentRequest**](UpdatePaymentRequest.md) |  |  |

### Return type

[**UpdatePayment200Response**](UpdatePayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## update_received_payment

> <UpdateReceivedPayment200Response> update_received_payment(id, update_received_payment_request)

Update a received payment

Update a Received Payment. The request body is one of UpdateACHReceivedPaymentRequest or UpdateRealtimeReceivedPaymentRequest, discriminated by data.type (achReceivedPayment, realtimeReceivedPayment).

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::PaymentsApi.new
id = 'id_example' # String | 
update_received_payment_request = UnitFinanceSdk::UpdateACHReceivedPaymentRequest.new({data: UnitFinanceSdk::UpdateACHReceivedPaymentData.new({type: 'achReceivedPayment', attributes: UnitFinanceSdk::UpdateACHReceivedPaymentDataAttributes.new({tags: { key: 3.56}})})}) # UpdateReceivedPaymentRequest | 

begin
  # Update a received payment
  result = api_instance.update_received_payment(id, update_received_payment_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->update_received_payment: #{e}"
end
```

#### Using the update_received_payment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<UpdateReceivedPayment200Response>, Integer, Hash)> update_received_payment_with_http_info(id, update_received_payment_request)

```ruby
begin
  # Update a received payment
  data, status_code, headers = api_instance.update_received_payment_with_http_info(id, update_received_payment_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <UpdateReceivedPayment200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling PaymentsApi->update_received_payment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **id** | **String** |  |  |
| **update_received_payment_request** | [**UpdateReceivedPaymentRequest**](UpdateReceivedPaymentRequest.md) |  |  |

### Return type

[**UpdateReceivedPayment200Response**](UpdateReceivedPayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

