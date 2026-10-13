# UnitFinanceSdk::CardsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**close_card**](CardsApi.md#close_card) | **POST** /cards/{cardId}/close | Close a card |
| [**create_card**](CardsApi.md#create_card) | **POST** /cards | Create a card |
| [**freeze_card**](CardsApi.md#freeze_card) | **POST** /cards/{cardId}/freeze | Freeze a card |
| [**get_card**](CardsApi.md#get_card) | **GET** /cards/{cardId} | Get a card |
| [**get_card_limits**](CardsApi.md#get_card_limits) | **GET** /cards/{cardId}/limits | Get card limits |
| [**get_card_pin_status**](CardsApi.md#get_card_pin_status) | **GET** /cards/{cardId}/secure-data/pin/status | Get card PIN status |
| [**list_cards**](CardsApi.md#list_cards) | **GET** /cards | List cards |
| [**replace_card**](CardsApi.md#replace_card) | **POST** /cards/{cardId}/replace | Replace a card |
| [**report_card_lost**](CardsApi.md#report_card_lost) | **POST** /cards/{cardId}/report-lost | Report card lost |
| [**report_card_stolen**](CardsApi.md#report_card_stolen) | **POST** /cards/{cardId}/report-stolen | Report card stolen |
| [**unfreeze_card**](CardsApi.md#unfreeze_card) | **POST** /cards/{cardId}/unfreeze | Unfreeze a card |
| [**update_card**](CardsApi.md#update_card) | **PATCH** /cards/{cardId} | Update a card |


## close_card

> <CloseCard200Response> close_card(card_id, opts)

Close a card

Close a card.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardsApi.new
card_id = 'card_id_example' # String | 
opts = {
  body: { ... } # Object | 
}

begin
  # Close a card
  result = api_instance.close_card(card_id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsApi->close_card: #{e}"
end
```

#### Using the close_card_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CloseCard200Response>, Integer, Hash)> close_card_with_http_info(card_id, opts)

```ruby
begin
  # Close a card
  data, status_code, headers = api_instance.close_card_with_http_info(card_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CloseCard200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsApi->close_card_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **card_id** | **String** |  |  |
| **body** | **Object** |  | [optional] |

### Return type

[**CloseCard200Response**](CloseCard200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## create_card

> <CreateCard201Response> create_card(create_card_request)

Create a card

Create a card. Variants: - **CreateBusinessCreditCard** - **CreateBusinessDebitCard** - **CreateBusinessVirtualCreditCard** - **CreateBusinessVirtualDebitCard** - **CreateIndividualDebitCard** - **CreateIndividualVirtualDebitCard**

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardsApi.new
create_card_request = UnitFinanceSdk::CreateBusinessCreditCardRequest.new({data: UnitFinanceSdk::CreateBusinessCreditCardData.new({type: 'businessCreditCard', attributes: UnitFinanceSdk::CreateBusinessCreditCardDataAttributes.new({full_name: UnitFinanceSdk::FullNameType.new({first: 'first_example', last: 'last_example'}), date_of_birth: Date.parse('Fri Aug 10 00:00:00 UTC 2001'), address: UnitFinanceSdk::AddressType.new({street: 'street_example', city: 'city_example', state: 'state_example', postal_code: 'postal_code_example', country: 'country_example'}), phone: UnitFinanceSdk::PhoneType.new({country_code: 'country_code_example', number: 'number_example'}), email: 'richard@piedpiper.com'}), relationships: UnitFinanceSdk::CreateFeeDataRelationships.new({account: UnitFinanceSdk::Relationship.new})})}) # CreateCardRequest | 

begin
  # Create a card
  result = api_instance.create_card(create_card_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsApi->create_card: #{e}"
end
```

#### Using the create_card_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateCard201Response>, Integer, Hash)> create_card_with_http_info(create_card_request)

```ruby
begin
  # Create a card
  data, status_code, headers = api_instance.create_card_with_http_info(create_card_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateCard201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsApi->create_card_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_card_request** | [**CreateCardRequest**](CreateCardRequest.md) |  |  |

### Return type

[**CreateCard201Response**](CreateCard201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## freeze_card

> <CloseCard200Response> freeze_card(card_id, freeze_card_request)

Freeze a card

Freeze a card (temporarily block a card).

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardsApi.new
card_id = 'card_id_example' # String | 
freeze_card_request = UnitFinanceSdk::FreezeCardRequest.new({data: UnitFinanceSdk::FreezeCardData.new({type: 'freezeCard', attributes: UnitFinanceSdk::FreezeCardDataAttributes.new})}) # FreezeCardRequest | 

begin
  # Freeze a card
  result = api_instance.freeze_card(card_id, freeze_card_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsApi->freeze_card: #{e}"
end
```

#### Using the freeze_card_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CloseCard200Response>, Integer, Hash)> freeze_card_with_http_info(card_id, freeze_card_request)

```ruby
begin
  # Freeze a card
  data, status_code, headers = api_instance.freeze_card_with_http_info(card_id, freeze_card_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CloseCard200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsApi->freeze_card_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **card_id** | **String** |  |  |
| **freeze_card_request** | [**FreezeCardRequest**](FreezeCardRequest.md) |  |  |

### Return type

[**CloseCard200Response**](CloseCard200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## get_card

> <GetCard200Response> get_card(card_id, opts)

Get a card

Get a card resource by id.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardsApi.new
card_id = 'card_id_example' # String | 
opts = {
  include: 'include_example' # String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources
}

begin
  # Get a card
  result = api_instance.get_card(card_id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsApi->get_card: #{e}"
end
```

#### Using the get_card_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetCard200Response>, Integer, Hash)> get_card_with_http_info(card_id, opts)

```ruby
begin
  # Get a card
  data, status_code, headers = api_instance.get_card_with_http_info(card_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetCard200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsApi->get_card_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **card_id** | **String** |  |  |
| **include** | **String** | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources | [optional] |

### Return type

[**GetCard200Response**](GetCard200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## get_card_limits

> <GetAccountLimits200Response> get_card_limits(card_id)

Get card limits

Get the limits of a card.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardsApi.new
card_id = 'card_id_example' # String | 

begin
  # Get card limits
  result = api_instance.get_card_limits(card_id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsApi->get_card_limits: #{e}"
end
```

#### Using the get_card_limits_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetAccountLimits200Response>, Integer, Hash)> get_card_limits_with_http_info(card_id)

```ruby
begin
  # Get card limits
  data, status_code, headers = api_instance.get_card_limits_with_http_info(card_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetAccountLimits200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsApi->get_card_limits_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **card_id** | **String** |  |  |

### Return type

[**GetAccountLimits200Response**](GetAccountLimits200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## get_card_pin_status

> <GetCardPinStatus200Response> get_card_pin_status(card_id)

Get card PIN status

Gets the PIN status for the specified card.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardsApi.new
card_id = 'card_id_example' # String | 

begin
  # Get card PIN status
  result = api_instance.get_card_pin_status(card_id)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsApi->get_card_pin_status: #{e}"
end
```

#### Using the get_card_pin_status_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetCardPinStatus200Response>, Integer, Hash)> get_card_pin_status_with_http_info(card_id)

```ruby
begin
  # Get card PIN status
  data, status_code, headers = api_instance.get_card_pin_status_with_http_info(card_id)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetCardPinStatus200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsApi->get_card_pin_status_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **card_id** | **String** |  |  |

### Return type

[**GetCardPinStatus200Response**](GetCardPinStatus200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## list_cards

> <ListCards200Response> list_cards(opts)

List cards

List cards. Filtering and paging can be applied.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardsApi.new
opts = {
  page_limit: 'page_limit_example', # String | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. Sent as a numeric string (query parameters are strings in HTTP).
  page_offset: 'page_offset_example', # String | Optional. Number of resources to skip. See Pagination. Sent as a numeric string (query parameters are strings in HTTP).
  filter_account_id: 'filter_account_id_example', # String | Optional. Filters the results by the specified account id.
  filter_customer_id: 'filter_customer_id_example', # String | Optional. Filters the results by the specified customer id.
  filter_tags: 'filter_tags_example', # String | Optional. Filter Cards by Tags.
  filter_status: 'filter_status_example', # String | Optional. Filter cards by Card Status. Usage example: *filter[status][0]=Stolen&filter[status][1]=Lost*
  include: 'include_example', # String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources
  sort: 'sort_example' # String | Optional. sort=createdAt for ascending order or sort=-createdAt (leading minus sign) for descending order.
}

begin
  # List cards
  result = api_instance.list_cards(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsApi->list_cards: #{e}"
end
```

#### Using the list_cards_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListCards200Response>, Integer, Hash)> list_cards_with_http_info(opts)

```ruby
begin
  # List cards
  data, status_code, headers = api_instance.list_cards_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListCards200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsApi->list_cards_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. Sent as a numeric string (query parameters are strings in HTTP). | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Optional. Number of resources to skip. See Pagination. Sent as a numeric string (query parameters are strings in HTTP). | [optional][default to &#39;0&#39;] |
| **filter_account_id** | **String** | Optional. Filters the results by the specified account id. | [optional] |
| **filter_customer_id** | **String** | Optional. Filters the results by the specified customer id. | [optional] |
| **filter_tags** | **String** | Optional. Filter Cards by Tags. | [optional] |
| **filter_status** | **String** | Optional. Filter cards by Card Status. Usage example: *filter[status][0]&#x3D;Stolen&amp;filter[status][1]&#x3D;Lost* | [optional] |
| **include** | **String** | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account. See Getting Related Resources | [optional] |
| **sort** | **String** | Optional. sort&#x3D;createdAt for ascending order or sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional][default to &#39;createdAt&#39;] |

### Return type

[**ListCards200Response**](ListCards200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## replace_card

> <ReplaceCard200Response> replace_card(card_id, replace_card_request)

Replace a card

Creates and ships a replacement physical debit card to an individual or business card holder. The replacement card has the same card number, expiration date and PIN as the original card, and does not require additional activation.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardsApi.new
card_id = 'card_id_example' # String | 
replace_card_request = UnitFinanceSdk::ReplaceCardRequest.new({data: UnitFinanceSdk::ReplaceCardData.new({type: 'replaceCard', attributes: UnitFinanceSdk::ReplaceCardDataAttributes.new})}) # ReplaceCardRequest | 

begin
  # Replace a card
  result = api_instance.replace_card(card_id, replace_card_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsApi->replace_card: #{e}"
end
```

#### Using the replace_card_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ReplaceCard200Response>, Integer, Hash)> replace_card_with_http_info(card_id, replace_card_request)

```ruby
begin
  # Replace a card
  data, status_code, headers = api_instance.replace_card_with_http_info(card_id, replace_card_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ReplaceCard200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsApi->replace_card_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **card_id** | **String** |  |  |
| **replace_card_request** | [**ReplaceCardRequest**](ReplaceCardRequest.md) |  |  |

### Return type

[**ReplaceCard200Response**](ReplaceCard200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## report_card_lost

> <CloseCard200Response> report_card_lost(card_id, opts)

Report card lost

Report card as lost.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardsApi.new
card_id = 'card_id_example' # String | 
opts = {
  body: { ... } # Object | 
}

begin
  # Report card lost
  result = api_instance.report_card_lost(card_id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsApi->report_card_lost: #{e}"
end
```

#### Using the report_card_lost_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CloseCard200Response>, Integer, Hash)> report_card_lost_with_http_info(card_id, opts)

```ruby
begin
  # Report card lost
  data, status_code, headers = api_instance.report_card_lost_with_http_info(card_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CloseCard200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsApi->report_card_lost_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **card_id** | **String** |  |  |
| **body** | **Object** |  | [optional] |

### Return type

[**CloseCard200Response**](CloseCard200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## report_card_stolen

> <CloseCard200Response> report_card_stolen(card_id, opts)

Report card stolen

Report card as stolen.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardsApi.new
card_id = 'card_id_example' # String | 
opts = {
  body: { ... } # Object | 
}

begin
  # Report card stolen
  result = api_instance.report_card_stolen(card_id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsApi->report_card_stolen: #{e}"
end
```

#### Using the report_card_stolen_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CloseCard200Response>, Integer, Hash)> report_card_stolen_with_http_info(card_id, opts)

```ruby
begin
  # Report card stolen
  data, status_code, headers = api_instance.report_card_stolen_with_http_info(card_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CloseCard200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsApi->report_card_stolen_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **card_id** | **String** |  |  |
| **body** | **Object** |  | [optional] |

### Return type

[**CloseCard200Response**](CloseCard200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## unfreeze_card

> <CloseCard200Response> unfreeze_card(card_id, opts)

Unfreeze a card

Unfreeze a frozen card.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardsApi.new
card_id = 'card_id_example' # String | 
opts = {
  body: { ... } # Object | 
}

begin
  # Unfreeze a card
  result = api_instance.unfreeze_card(card_id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsApi->unfreeze_card: #{e}"
end
```

#### Using the unfreeze_card_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CloseCard200Response>, Integer, Hash)> unfreeze_card_with_http_info(card_id, opts)

```ruby
begin
  # Unfreeze a card
  data, status_code, headers = api_instance.unfreeze_card_with_http_info(card_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CloseCard200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsApi->unfreeze_card_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **card_id** | **String** |  |  |
| **body** | **Object** |  | [optional] |

### Return type

[**CloseCard200Response**](CloseCard200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## update_card

> <UpdateCard200Response> update_card(card_id, update_card_request)

Update a card

Update a debit card.

### Examples

```ruby
require 'time'
require 'unit_openapi_ruby_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::CardsApi.new
card_id = 'card_id_example' # String | 
update_card_request = UnitFinanceSdk::UpdateCardRequest.new({data: UnitFinanceSdk::UpdateCardData.new({type: 'businessDebitCard', attributes: UnitFinanceSdk::UpdateCardDataAttributes.new})}) # UpdateCardRequest | 

begin
  # Update a card
  result = api_instance.update_card(card_id, update_card_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsApi->update_card: #{e}"
end
```

#### Using the update_card_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<UpdateCard200Response>, Integer, Hash)> update_card_with_http_info(card_id, update_card_request)

```ruby
begin
  # Update a card
  data, status_code, headers = api_instance.update_card_with_http_info(card_id, update_card_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <UpdateCard200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling CardsApi->update_card_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **card_id** | **String** |  |  |
| **update_card_request** | [**UpdateCardRequest**](UpdateCardRequest.md) |  |  |

### Return type

[**UpdateCard200Response**](UpdateCard200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json

