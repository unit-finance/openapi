# UnitFinanceSdk::CheckDepositsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**clear_check_deposit**](CheckDepositsApi.md#clear_check_deposit) | **POST** /check-deposits/{checkDepositId}/clear | Clear a check deposit |
| [**confirm_check_deposit_details**](CheckDepositsApi.md#confirm_check_deposit_details) | **POST** /check-deposits/{checkDepositId}/confirm | Confirm check deposit details |
| [**create_check_deposit**](CheckDepositsApi.md#create_check_deposit) | **POST** /check-deposits | Create a check deposit |
| [**create_check_deposit_send_link**](CheckDepositsApi.md#create_check_deposit_send_link) | **POST** /white-label/send-link | Create a check deposit send link |
| [**get_check_deposit**](CheckDepositsApi.md#get_check_deposit) | **GET** /check-deposits/{checkDepositId} | Get a check deposit by id |
| [**get_check_deposit_back_image**](CheckDepositsApi.md#get_check_deposit_back_image) | **GET** /check-deposits/{checkDepositId}/back | Get a check deposit back image |
| [**get_check_deposit_front_image**](CheckDepositsApi.md#get_check_deposit_front_image) | **GET** /check-deposits/{checkDepositId}/front | Get a check deposit front image |
| [**list_check_deposits**](CheckDepositsApi.md#list_check_deposits) | **GET** /check-deposits | List check deposits |
| [**update_check_deposit**](CheckDepositsApi.md#update_check_deposit) | **PATCH** /check-deposits/{checkDepositId} | Update a check deposit |
| [**upload_check_deposit_back_image**](CheckDepositsApi.md#upload_check_deposit_back_image) | **PUT** /check-deposits/{checkDepositId}/back | Upload a check deposit back image |
| [**upload_check_deposit_front_image**](CheckDepositsApi.md#upload_check_deposit_front_image) | **PUT** /check-deposits/{checkDepositId}/front | Upload a check deposit front image |


## clear_check_deposit

> <CreateCheckDeposit201Response> clear_check_deposit(check_deposit_id, opts)

Clear a check deposit

Clears a check deposit while in `Clearing` status. Overrides the original clearing period, making funds available immediately. Requires the Dynamic Clearing Period feature to be enabled.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CheckDepositsApi.new
check_deposit_id = 'check_deposit_id_example' # String | 
opts = {
  body: { ... } # Object | 
}

begin
  # Clear a check deposit
  result = api_instance.clear_check_deposit(check_deposit_id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckDepositsApi->clear_check_deposit: #{e}"
end
```

#### Using the clear_check_deposit_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateCheckDeposit201Response>, Integer, Hash)> clear_check_deposit_with_http_info(check_deposit_id, opts)

```ruby
begin
  # Clear a check deposit
  data, status_code, headers = api_instance.clear_check_deposit_with_http_info(check_deposit_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateCheckDeposit201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckDepositsApi->clear_check_deposit_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **check_deposit_id** | **String** |  |  |
| **body** | **Object** |  | [optional] |

### Return type

[**CreateCheckDeposit201Response**](CreateCheckDeposit201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## confirm_check_deposit_details

> confirm_check_deposit_details(check_deposit_id, opts)

Confirm check deposit details

Confirms a check deposit details when it's in `AwaitingCustomerConfirmation` status

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CheckDepositsApi.new
check_deposit_id = 'check_deposit_id_example' # String | 
opts = {
  body: { ... } # Object | 
}

begin
  # Confirm check deposit details
  api_instance.confirm_check_deposit_details(check_deposit_id, opts)
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckDepositsApi->confirm_check_deposit_details: #{e}"
end
```

#### Using the confirm_check_deposit_details_with_http_info variant

This returns an Array which contains the response data (`nil` in this case), status code and headers.

> <Array(nil, Integer, Hash)> confirm_check_deposit_details_with_http_info(check_deposit_id, opts)

```ruby
begin
  # Confirm check deposit details
  data, status_code, headers = api_instance.confirm_check_deposit_details_with_http_info(check_deposit_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => nil
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckDepositsApi->confirm_check_deposit_details_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **check_deposit_id** | **String** |  |  |
| **body** | **Object** |  | [optional] |

### Return type

nil (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## create_check_deposit

> <CreateCheckDeposit201Response> create_check_deposit(create_check_deposit_request)

Create a check deposit

Creates a check deposit for an `Account`.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CheckDepositsApi.new
create_check_deposit_request = UnitFinanceSdk::CreateCheckDepositRequest.new({data: UnitFinanceSdk::CreateCheckDepositData.new({type: 'checkDeposit', attributes: UnitFinanceSdk::CreateCheckDepositDataAttributes.new({amount: 20000, description: 'Check deposit'}), relationships: UnitFinanceSdk::CreateFeeDataRelationships.new({account: UnitFinanceSdk::Relationship.new})})}) # CreateCheckDepositRequest | 

begin
  # Create a check deposit
  result = api_instance.create_check_deposit(create_check_deposit_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckDepositsApi->create_check_deposit: #{e}"
end
```

#### Using the create_check_deposit_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateCheckDeposit201Response>, Integer, Hash)> create_check_deposit_with_http_info(create_check_deposit_request)

```ruby
begin
  # Create a check deposit
  data, status_code, headers = api_instance.create_check_deposit_with_http_info(create_check_deposit_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateCheckDeposit201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckDepositsApi->create_check_deposit_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_check_deposit_request** | [**CreateCheckDepositRequest**](CreateCheckDepositRequest.md) |  |  |

### Return type

[**CreateCheckDeposit201Response**](CreateCheckDeposit201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## create_check_deposit_send_link

> <CreateCheckDepositSendLink201Response> create_check_deposit_send_link(create_check_deposit_send_link_request)

Create a check deposit send link

Creates a shareable link for the Check Deposit component for an `Account`. The link can be sent to an end user via SMS or email and used to complete a check deposit. Unless a White Label Theme is customized, the component uses the default theme. Unless an Email Domain is customized the link will be created under a default domain starting in `https://application-form.sh`.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CheckDepositsApi.new
create_check_deposit_send_link_request = UnitFinanceSdk::CreateCheckDepositSendLinkRequest.new({data: UnitFinanceSdk::CreateCheckDepositSendLinkData.new({type: 'sendLinkForCheckDepositComponent', attributes: UnitFinanceSdk::CreateCheckDepositSendLinkDataAttributes.new({qr_code: true, idempotency_key: '3a1a33be-4e12-4603-9ed0-820922389fb8'}), relationships: UnitFinanceSdk::CreateCheckDepositSendLinkDataRelationships.new({white_label_theme: UnitFinanceSdk::Relationship.new, account: UnitFinanceSdk::Relationship.new, authorized_user: })})}) # CreateCheckDepositSendLinkRequest | 

begin
  # Create a check deposit send link
  result = api_instance.create_check_deposit_send_link(create_check_deposit_send_link_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckDepositsApi->create_check_deposit_send_link: #{e}"
end
```

#### Using the create_check_deposit_send_link_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateCheckDepositSendLink201Response>, Integer, Hash)> create_check_deposit_send_link_with_http_info(create_check_deposit_send_link_request)

```ruby
begin
  # Create a check deposit send link
  data, status_code, headers = api_instance.create_check_deposit_send_link_with_http_info(create_check_deposit_send_link_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateCheckDepositSendLink201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckDepositsApi->create_check_deposit_send_link_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_check_deposit_send_link_request** | [**CreateCheckDepositSendLinkRequest**](CreateCheckDepositSendLinkRequest.md) |  |  |

### Return type

[**CreateCheckDepositSendLink201Response**](CreateCheckDepositSendLink201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## get_check_deposit

> <GetCheckDeposit200Response> get_check_deposit(check_deposit_id, opts)

Get a check deposit by id

Get a check deposit by id.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CheckDepositsApi.new
check_deposit_id = 'check_deposit_id_example' # String | 
opts = {
  include: 'include_example' # String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources
}

begin
  # Get a check deposit by id
  result = api_instance.get_check_deposit(check_deposit_id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckDepositsApi->get_check_deposit: #{e}"
end
```

#### Using the get_check_deposit_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetCheckDeposit200Response>, Integer, Hash)> get_check_deposit_with_http_info(check_deposit_id, opts)

```ruby
begin
  # Get a check deposit by id
  data, status_code, headers = api_instance.get_check_deposit_with_http_info(check_deposit_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetCheckDeposit200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckDepositsApi->get_check_deposit_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **check_deposit_id** | **String** |  |  |
| **include** | **String** | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources | [optional] |

### Return type

[**GetCheckDeposit200Response**](GetCheckDeposit200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## get_check_deposit_back_image

> File get_check_deposit_back_image(check_deposit_id)

Get a check deposit back image

Get a check deposit back image by check deposit id.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CheckDepositsApi.new
check_deposit_id = 'check_deposit_id_example' # String | 

begin
  # Get a check deposit back image
  result = api_instance.get_check_deposit_back_image(check_deposit_id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckDepositsApi->get_check_deposit_back_image: #{e}"
end
```

#### Using the get_check_deposit_back_image_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(File, Integer, Hash)> get_check_deposit_back_image_with_http_info(check_deposit_id)

```ruby
begin
  # Get a check deposit back image
  data, status_code, headers = api_instance.get_check_deposit_back_image_with_http_info(check_deposit_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => File
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckDepositsApi->get_check_deposit_back_image_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **check_deposit_id** | **String** |  |  |

### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/jpeg, application/vnd.api+json


## get_check_deposit_front_image

> File get_check_deposit_front_image(check_deposit_id)

Get a check deposit front image

Get a check deposit front image by check deposit id.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CheckDepositsApi.new
check_deposit_id = 'check_deposit_id_example' # String | 

begin
  # Get a check deposit front image
  result = api_instance.get_check_deposit_front_image(check_deposit_id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckDepositsApi->get_check_deposit_front_image: #{e}"
end
```

#### Using the get_check_deposit_front_image_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(File, Integer, Hash)> get_check_deposit_front_image_with_http_info(check_deposit_id)

```ruby
begin
  # Get a check deposit front image
  data, status_code, headers = api_instance.get_check_deposit_front_image_with_http_info(check_deposit_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => File
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckDepositsApi->get_check_deposit_front_image_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **check_deposit_id** | **String** |  |  |

### Return type

**File**

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: image/jpeg, application/vnd.api+json


## list_check_deposits

> <ListCheckDeposits200Response> list_check_deposits(opts)

List check deposits

List check deposit resources. Filtering, paging and sorting can be applied.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CheckDepositsApi.new
opts = {
  page_limit: 'page_limit_example', # String | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
  page_offset: 'page_offset_example', # String | Number of resources to skip. See Pagination.
  filter_account_id: 'filter_account_id_example', # String | Optional. Filters the results by the specified account id.
  filter_customer_id: 'filter_customer_id_example', # String | Optional. Filters the results by the specified customer id.
  filter_status: 'filter_status_example', # String | Optional. Filter by Check Deposit Status. Usage Example: filter[status][0]=PendingReview&filter[status][1]=AwaitingImages
  filter_tags: 'filter_tags_example', # String | Optional. Filter check deposits by Tags.
  filter_from_amount: 'filter_from_amount_example', # String | Optional. Filters the Check Deposits that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000
  filter_to_amount: 'filter_to_amount_example', # String | Optional. Filters the Check Deposits that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000
  sort: 'sort_example', # String | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order.
  include: 'include_example' # String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources
}

begin
  # List check deposits
  result = api_instance.list_check_deposits(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckDepositsApi->list_check_deposits: #{e}"
end
```

#### Using the list_check_deposits_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListCheckDeposits200Response>, Integer, Hash)> list_check_deposits_with_http_info(opts)

```ruby
begin
  # List check deposits
  data, status_code, headers = api_instance.list_check_deposits_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListCheckDeposits200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckDepositsApi->list_check_deposits_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Number of resources to skip. See Pagination. | [optional][default to &#39;0&#39;] |
| **filter_account_id** | **String** | Optional. Filters the results by the specified account id. | [optional] |
| **filter_customer_id** | **String** | Optional. Filters the results by the specified customer id. | [optional] |
| **filter_status** | **String** | Optional. Filter by Check Deposit Status. Usage Example: filter[status][0]&#x3D;PendingReview&amp;filter[status][1]&#x3D;AwaitingImages | [optional] |
| **filter_tags** | **String** | Optional. Filter check deposits by Tags. | [optional] |
| **filter_from_amount** | **String** | Optional. Filters the Check Deposits that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 | [optional] |
| **filter_to_amount** | **String** | Optional. Filters the Check Deposits that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 | [optional] |
| **sort** | **String** | Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional][default to &#39;-createdAt&#39;] |
| **include** | **String** | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources | [optional] |

### Return type

[**ListCheckDeposits200Response**](ListCheckDeposits200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## update_check_deposit

> <CreateCheckDeposit201Response> update_check_deposit(check_deposit_id, update_check_deposit_request)

Update a check deposit

Update a check deposit.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CheckDepositsApi.new
check_deposit_id = 'check_deposit_id_example' # String | 
update_check_deposit_request = UnitFinanceSdk::UpdateCheckDepositRequest.new({data: UnitFinanceSdk::UpdateData.new({type: 'checkDeposit', attributes: UnitFinanceSdk::UpdateDataAttributes.new({tags: { key: 3.56}})})}) # UpdateCheckDepositRequest | 

begin
  # Update a check deposit
  result = api_instance.update_check_deposit(check_deposit_id, update_check_deposit_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckDepositsApi->update_check_deposit: #{e}"
end
```

#### Using the update_check_deposit_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateCheckDeposit201Response>, Integer, Hash)> update_check_deposit_with_http_info(check_deposit_id, update_check_deposit_request)

```ruby
begin
  # Update a check deposit
  data, status_code, headers = api_instance.update_check_deposit_with_http_info(check_deposit_id, update_check_deposit_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateCheckDeposit201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckDepositsApi->update_check_deposit_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **check_deposit_id** | **String** |  |  |
| **update_check_deposit_request** | [**UpdateCheckDepositRequest**](UpdateCheckDepositRequest.md) |  |  |

### Return type

[**CreateCheckDeposit201Response**](CreateCheckDeposit201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## upload_check_deposit_back_image

> <CreateCheckDeposit201Response> upload_check_deposit_back_image(check_deposit_id, body)

Upload a check deposit back image

Uploads a check back-side image file. Currently only `jpeg` file type is supported.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CheckDepositsApi.new
check_deposit_id = 'check_deposit_id_example' # String | 
body = File.new('/path/to/some/file') # File | 

begin
  # Upload a check deposit back image
  result = api_instance.upload_check_deposit_back_image(check_deposit_id, body)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckDepositsApi->upload_check_deposit_back_image: #{e}"
end
```

#### Using the upload_check_deposit_back_image_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateCheckDeposit201Response>, Integer, Hash)> upload_check_deposit_back_image_with_http_info(check_deposit_id, body)

```ruby
begin
  # Upload a check deposit back image
  data, status_code, headers = api_instance.upload_check_deposit_back_image_with_http_info(check_deposit_id, body)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateCheckDeposit201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckDepositsApi->upload_check_deposit_back_image_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **check_deposit_id** | **String** |  |  |
| **body** | **File** |  |  |

### Return type

[**CreateCheckDeposit201Response**](CreateCheckDeposit201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: image/jpeg
- **Accept**: application/vnd.api+json


## upload_check_deposit_front_image

> <CreateCheckDeposit201Response> upload_check_deposit_front_image(check_deposit_id, body)

Upload a check deposit front image

Uploads a check front-side image file. Currently only `jpeg` file type is supported.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CheckDepositsApi.new
check_deposit_id = 'check_deposit_id_example' # String | 
body = File.new('/path/to/some/file') # File | 

begin
  # Upload a check deposit front image
  result = api_instance.upload_check_deposit_front_image(check_deposit_id, body)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckDepositsApi->upload_check_deposit_front_image: #{e}"
end
```

#### Using the upload_check_deposit_front_image_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateCheckDeposit201Response>, Integer, Hash)> upload_check_deposit_front_image_with_http_info(check_deposit_id, body)

```ruby
begin
  # Upload a check deposit front image
  data, status_code, headers = api_instance.upload_check_deposit_front_image_with_http_info(check_deposit_id, body)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateCheckDeposit201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CheckDepositsApi->upload_check_deposit_front_image_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **check_deposit_id** | **String** |  |  |
| **body** | **File** |  |  |

### Return type

[**CreateCheckDeposit201Response**](CreateCheckDeposit201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: image/jpeg
- **Accept**: application/vnd.api+json

