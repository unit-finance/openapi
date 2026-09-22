# UnitFinanceSdk::CheckPaymentsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**approve_check_payment_additional_verification**](CheckPaymentsApi.md#approve_check_payment_additional_verification) | **POST** /check-payments/{checkPaymentId}/approve | Approve check payment additional verification |
| [**cancel_check_payment**](CheckPaymentsApi.md#cancel_check_payment) | **POST** /check-payments/{checkPaymentId}/cancel | Cancel a check payment |
| [**get_check_image**](CheckPaymentsApi.md#get_check_image) | **GET** /check-payments/{checkPaymentId}/{side}/{type} | Get a check payment image |
| [**get_check_payment**](CheckPaymentsApi.md#get_check_payment) | **GET** /check-payments/{checkPaymentId} | Get a check payment by id |
| [**list_check_payments**](CheckPaymentsApi.md#list_check_payments) | **GET** /check-payments | List check payments |
| [**originate_check_payment_mail_physical_check**](CheckPaymentsApi.md#originate_check_payment_mail_physical_check) | **POST** /check-payments | Originate a check payment |
| [**return_check_payment**](CheckPaymentsApi.md#return_check_payment) | **POST** /check-payments/{checkPaymentId}/return | Return a check payment |


## approve_check_payment_additional_verification

> <OriginateCheckPaymentMailPhysicalCheck201Response> approve_check_payment_additional_verification(check_payment_id, approve_check_payment_additional_verification_request)

Approve check payment additional verification

When a Check Payment requires additional verification, its `additionalVerificationStatus` will be set to `Required`. In this case, a CheckPayment.additionalVerificationRequired event will be triggered.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CheckPaymentsApi.new
check_payment_id = 'check_payment_id_example' # String | 
approve_check_payment_additional_verification_request = UnitFinanceSdk::ApproveCheckPaymentAdditionalVerificationRequest.new({data: UnitFinanceSdk::ApproveCheckPaymentAdditionalVerificationData.new({type: 'additionalVerification', attributes: 3.56})}) # ApproveCheckPaymentAdditionalVerificationRequest | 

begin
  # Approve check payment additional verification
  result = api_instance.approve_check_payment_additional_verification(check_payment_id, approve_check_payment_additional_verification_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckPaymentsApi->approve_check_payment_additional_verification: #{e}"
end
```

#### Using the approve_check_payment_additional_verification_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<OriginateCheckPaymentMailPhysicalCheck201Response>, Integer, Hash)> approve_check_payment_additional_verification_with_http_info(check_payment_id, approve_check_payment_additional_verification_request)

```ruby
begin
  # Approve check payment additional verification
  data, status_code, headers = api_instance.approve_check_payment_additional_verification_with_http_info(check_payment_id, approve_check_payment_additional_verification_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <OriginateCheckPaymentMailPhysicalCheck201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckPaymentsApi->approve_check_payment_additional_verification_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **check_payment_id** | **String** |  |  |
| **approve_check_payment_additional_verification_request** | [**ApproveCheckPaymentAdditionalVerificationRequest**](ApproveCheckPaymentAdditionalVerificationRequest.md) |  |  |

### Return type

[**OriginateCheckPaymentMailPhysicalCheck201Response**](OriginateCheckPaymentMailPhysicalCheck201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## cancel_check_payment

> <OriginateCheckPaymentMailPhysicalCheck201Response> cancel_check_payment(check_payment_id, opts)

Cancel a check payment

Cancels a previously processed check payment. Only check payments in status `Pending` can be canceled. If cancelation was successful, the check status will change to `Canceled` and a checkPayment.canceled will be fired.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CheckPaymentsApi.new
check_payment_id = 'check_payment_id_example' # String | 
opts = {
  body: { ... } # Object | 
}

begin
  # Cancel a check payment
  result = api_instance.cancel_check_payment(check_payment_id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckPaymentsApi->cancel_check_payment: #{e}"
end
```

#### Using the cancel_check_payment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<OriginateCheckPaymentMailPhysicalCheck201Response>, Integer, Hash)> cancel_check_payment_with_http_info(check_payment_id, opts)

```ruby
begin
  # Cancel a check payment
  data, status_code, headers = api_instance.cancel_check_payment_with_http_info(check_payment_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <OriginateCheckPaymentMailPhysicalCheck201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckPaymentsApi->cancel_check_payment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **check_payment_id** | **String** |  |  |
| **body** | **Object** |  | [optional] |

### Return type

[**OriginateCheckPaymentMailPhysicalCheck201Response**](OriginateCheckPaymentMailPhysicalCheck201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## get_check_image

> File get_check_image(check_payment_id, side, type)

Get a check payment image

Get a check payment image by check payment id, side (front or back), and type (printed or deposited).

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CheckPaymentsApi.new
check_payment_id = 'check_payment_id_example' # String | 
side = 'side_example' # String | Check side: front or back.
type = 'type_example' # String | Image type: printed or deposited.

begin
  # Get a check payment image
  result = api_instance.get_check_image(check_payment_id, side, type)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckPaymentsApi->get_check_image: #{e}"
end
```

#### Using the get_check_image_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(File, Integer, Hash)> get_check_image_with_http_info(check_payment_id, side, type)

```ruby
begin
  # Get a check payment image
  data, status_code, headers = api_instance.get_check_image_with_http_info(check_payment_id, side, type)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => File
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckPaymentsApi->get_check_image_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **check_payment_id** | **String** |  |  |
| **side** | **String** | Check side: front or back. |  |
| **type** | **String** | Image type: printed or deposited. |  |

### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/jpeg, application/vnd.api+json


## get_check_payment

> <GetCheckPayment200Response> get_check_payment(check_payment_id, opts)

Get a check payment by id

Get a check payment by id.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CheckPaymentsApi.new
check_payment_id = 'check_payment_id_example' # String | 
opts = {
  include: 'include_example' # String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources
}

begin
  # Get a check payment by id
  result = api_instance.get_check_payment(check_payment_id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckPaymentsApi->get_check_payment: #{e}"
end
```

#### Using the get_check_payment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetCheckPayment200Response>, Integer, Hash)> get_check_payment_with_http_info(check_payment_id, opts)

```ruby
begin
  # Get a check payment by id
  data, status_code, headers = api_instance.get_check_payment_with_http_info(check_payment_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetCheckPayment200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckPaymentsApi->get_check_payment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **check_payment_id** | **String** |  |  |
| **include** | **String** | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources | [optional] |

### Return type

[**GetCheckPayment200Response**](GetCheckPayment200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## list_check_payments

> <ListCheckPayments200Response> list_check_payments(opts)

List check payments

List check payments resources. Filtering, paging and sorting can be applied.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CheckPaymentsApi.new
opts = {
  page_limit: 'page_limit_example', # String | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
  page_offset: 'page_offset_example', # String | Number of resources to skip. See Pagination.
  filter_account_id: 'filter_account_id_example', # String | Optional. Filters the results by the specified account id.
  filter_customer_id: 'filter_customer_id_example', # String | Optional. Filters the results by the specified customer id.
  filter_tags: 'filter_tags_example', # String | Optional. Filter check payments by Tags.
  sort: 'sort_example', # String | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order.
  filter_since: 'filter_since_example', # String | Optional. Filters *before* the specified date. e.g. 2021-06-01
  filter_until: 'filter_until_example', # String | Optional. Filters *after* the specified date. e.g. 2021-07-01
  filter_status: 'filter_status_example', # String | Optional. Filter by status (New, Pending, Canceled,Rejected, InDelivery, InProduction,Delivered, ReturnedToSender, Pending, Processed, PendingReview,MarkedForReturn, Returned, `). Usage example: *filter[status][0]=Processed*
  filter_from_amount: 'filter_from_amount_example', # String | Optional. Filters the Check Payment that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000
  filter_to_amount: 'filter_to_amount_example', # String | Optional. Filters the Check Payment that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000
  filter_check_number: 'filter_check_number_example', # String | Optional. Filter Check Payments by check number (trimming leading zeros).
  include: 'include_example' # String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources
}

begin
  # List check payments
  result = api_instance.list_check_payments(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckPaymentsApi->list_check_payments: #{e}"
end
```

#### Using the list_check_payments_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListCheckPayments200Response>, Integer, Hash)> list_check_payments_with_http_info(opts)

```ruby
begin
  # List check payments
  data, status_code, headers = api_instance.list_check_payments_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListCheckPayments200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckPaymentsApi->list_check_payments_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Number of resources to skip. See Pagination. | [optional][default to &#39;0&#39;] |
| **filter_account_id** | **String** | Optional. Filters the results by the specified account id. | [optional] |
| **filter_customer_id** | **String** | Optional. Filters the results by the specified customer id. | [optional] |
| **filter_tags** | **String** | Optional. Filter check payments by Tags. | [optional] |
| **sort** | **String** | Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional][default to &#39;-createdAt&#39;] |
| **filter_since** | **String** | Optional. Filters *before* the specified date. e.g. 2021-06-01 | [optional] |
| **filter_until** | **String** | Optional. Filters *after* the specified date. e.g. 2021-07-01 | [optional] |
| **filter_status** | **String** | Optional. Filter by status (New, Pending, Canceled,Rejected, InDelivery, InProduction,Delivered, ReturnedToSender, Pending, Processed, PendingReview,MarkedForReturn, Returned, &#x60;). Usage example: *filter[status][0]&#x3D;Processed* | [optional] |
| **filter_from_amount** | **String** | Optional. Filters the Check Payment that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 | [optional] |
| **filter_to_amount** | **String** | Optional. Filters the Check Payment that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 | [optional] |
| **filter_check_number** | **String** | Optional. Filter Check Payments by check number (trimming leading zeros). | [optional] |
| **include** | **String** | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources | [optional] |

### Return type

[**ListCheckPayments200Response**](ListCheckPayments200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## originate_check_payment_mail_physical_check

> <OriginateCheckPaymentMailPhysicalCheck201Response> originate_check_payment_mail_physical_check(originate_check_payment_mail_physical_check_request)

Originate a check payment

Creates a physical check. The check will be printed and mailed to the US recipient specified in the request. Originated check payments can be set to be sent immediately or scheduled for a future date.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CheckPaymentsApi.new
originate_check_payment_mail_physical_check_request = UnitFinanceSdk::OriginateCheckPaymentMailPhysicalCheckRequest.new({data: UnitFinanceSdk::OriginateCheckPaymentMailPhysicalCheckData.new({type: 'checkPayment', attributes: UnitFinanceSdk::OriginateCheckPaymentMailPhysicalCheckDataAttributes.new({amount: 1000, counterparty: UnitFinanceSdk::CheckPaymentCounterpartyType.new({name: 'name_example', address: UnitFinanceSdk::AddressType.new({street: 'street_example', city: 'city_example', state: 'state_example', postal_code: 'postal_code_example', country: 'country_example'})}), description: 'October paycheck', idempotency_key: 'asdfghjkl'}), relationships: UnitFinanceSdk::OriginateCheckPaymentMailPhysicalCheckDataRelationships.new({account: UnitFinanceSdk::Relationship.new, customer: UnitFinanceSdk::Relationship.new})})}) # OriginateCheckPaymentMailPhysicalCheckRequest | 

begin
  # Originate a check payment
  result = api_instance.originate_check_payment_mail_physical_check(originate_check_payment_mail_physical_check_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckPaymentsApi->originate_check_payment_mail_physical_check: #{e}"
end
```

#### Using the originate_check_payment_mail_physical_check_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<OriginateCheckPaymentMailPhysicalCheck201Response>, Integer, Hash)> originate_check_payment_mail_physical_check_with_http_info(originate_check_payment_mail_physical_check_request)

```ruby
begin
  # Originate a check payment
  data, status_code, headers = api_instance.originate_check_payment_mail_physical_check_with_http_info(originate_check_payment_mail_physical_check_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <OriginateCheckPaymentMailPhysicalCheck201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckPaymentsApi->originate_check_payment_mail_physical_check_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **originate_check_payment_mail_physical_check_request** | [**OriginateCheckPaymentMailPhysicalCheckRequest**](OriginateCheckPaymentMailPhysicalCheckRequest.md) |  |  |

### Return type

[**OriginateCheckPaymentMailPhysicalCheck201Response**](OriginateCheckPaymentMailPhysicalCheck201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## return_check_payment

> <OriginateCheckPaymentMailPhysicalCheck201Response> return_check_payment(check_payment_id, return_check_payment_request)

Return a check payment

Create a return as long as it happens before the `returnCutoffTime`, the Check Payment status will be set to `MarkedForReturn`. A CheckPayment.markedForReturn event is raised when the request is completed successfully.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CheckPaymentsApi.new
check_payment_id = 'check_payment_id_example' # String | 
return_check_payment_request = UnitFinanceSdk::ReturnCheckPaymentRequest.new({data: UnitFinanceSdk::ReturnCheckPaymentData.new({type: 'checkPaymentReturn', attributes: UnitFinanceSdk::ReturnCheckPaymentDataAttributes.new({reason: 'StopPayment'})})}) # ReturnCheckPaymentRequest | 

begin
  # Return a check payment
  result = api_instance.return_check_payment(check_payment_id, return_check_payment_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckPaymentsApi->return_check_payment: #{e}"
end
```

#### Using the return_check_payment_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<OriginateCheckPaymentMailPhysicalCheck201Response>, Integer, Hash)> return_check_payment_with_http_info(check_payment_id, return_check_payment_request)

```ruby
begin
  # Return a check payment
  data, status_code, headers = api_instance.return_check_payment_with_http_info(check_payment_id, return_check_payment_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <OriginateCheckPaymentMailPhysicalCheck201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckPaymentsApi->return_check_payment_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **check_payment_id** | **String** |  |  |
| **return_check_payment_request** | [**ReturnCheckPaymentRequest**](ReturnCheckPaymentRequest.md) |  |  |

### Return type

[**OriginateCheckPaymentMailPhysicalCheck201Response**](OriginateCheckPaymentMailPhysicalCheck201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

