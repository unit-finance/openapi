# UnitFinanceSdk::InterestApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**get_total_accrued_interest**](InterestApi.md#get_total_accrued_interest) | **GET** /accrued-interest/total | Get total accrued interest |


## get_total_accrued_interest

> <GetTotalAccruedInterest200Response> get_total_accrued_interest(opts)

Get total accrued interest

The response to this API call includes the sum of customer accrued interest (in cents) for a given period of time.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::InterestApi.new
opts = {
  filter_account_id: 'filter_account_id_example', # String | Optional. Filters the results by the specified account id.
  filter_since: 'filter_since_example', # String | Optional. Filters the accrued interest *after* the specified date. e.g. 2024-01-13T16:01:19.346Z
  filter_until: 'filter_until_example', # String | Optional. Filters the account accrued interest *before* the specified date. e.g. 2024-05-06T16:01:00.123Z
  filter_since_interest_month: 'filter_since_interest_month_example', # String | Optional. Filters the accrued interest *after* the specified month. e.g. 2024-03
  filter_until_interest_month: 'filter_until_interest_month_example' # String | Optional. Filters the accrued interest *before* the specified month. e.g. 2024-07
}

begin
  # Get total accrued interest
  result = api_instance.get_total_accrued_interest(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling InterestApi->get_total_accrued_interest: #{e}"
end
```

#### Using the get_total_accrued_interest_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetTotalAccruedInterest200Response>, Integer, Hash)> get_total_accrued_interest_with_http_info(opts)

```ruby
begin
  # Get total accrued interest
  data, status_code, headers = api_instance.get_total_accrued_interest_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetTotalAccruedInterest200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling InterestApi->get_total_accrued_interest_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **filter_account_id** | **String** | Optional. Filters the results by the specified account id. | [optional] |
| **filter_since** | **String** | Optional. Filters the accrued interest *after* the specified date. e.g. 2024-01-13T16:01:19.346Z | [optional] |
| **filter_until** | **String** | Optional. Filters the account accrued interest *before* the specified date. e.g. 2024-05-06T16:01:00.123Z | [optional] |
| **filter_since_interest_month** | **String** | Optional. Filters the accrued interest *after* the specified month. e.g. 2024-03 | [optional] |
| **filter_until_interest_month** | **String** | Optional. Filters the accrued interest *before* the specified month. e.g. 2024-07 | [optional] |

### Return type

[**GetTotalAccruedInterest200Response**](GetTotalAccruedInterest200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

