# UnitFinanceSdk::RewardsApi

All URIs are relative to *https://api.s.unit.sh*

| Method | HTTP request | Description |
| ------ | ------------ | ----------- |
| [**create_reward**](RewardsApi.md#create_reward) | **POST** /rewards | Create a reward |
| [**get_reward**](RewardsApi.md#get_reward) | **GET** /rewards/{rewardId} | Get a reward by id |
| [**list_rewards**](RewardsApi.md#list_rewards) | **GET** /rewards | List rewards |


## create_reward

> <CreateReward201Response> create_reward(create_reward_request)

Create a reward

Creates a reward resource.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::RewardsApi.new
create_reward_request = UnitFinanceSdk::CreateRewardRequest.new({data: UnitFinanceSdk::CreateRewardData.new({type: 'reward', attributes: UnitFinanceSdk::CreateRewardDataAttributes.new({amount: 3000, description: 'Reward for transaction #5678'}), relationships: UnitFinanceSdk::CreateRewardDataRelationships.new({receiving_account: UnitFinanceSdk::Relationship.new})})}) # CreateRewardRequest | 

begin
  # Create a reward
  result = api_instance.create_reward(create_reward_request)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling RewardsApi->create_reward: #{e}"
end
```

#### Using the create_reward_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<CreateReward201Response>, Integer, Hash)> create_reward_with_http_info(create_reward_request)

```ruby
begin
  # Create a reward
  data, status_code, headers = api_instance.create_reward_with_http_info(create_reward_request)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <CreateReward201Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling RewardsApi->create_reward_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **create_reward_request** | [**CreateRewardRequest**](CreateRewardRequest.md) |  |  |

### Return type

[**CreateReward201Response**](CreateReward201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: application/vnd.api+json
- **Accept**: application/vnd.api+json


## get_reward

> <GetReward200Response> get_reward(reward_id, opts)

Get a reward by id

Get a reward by id.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::RewardsApi.new
reward_id = 'reward_id_example' # String | 
opts = {
  include: 'include_example' # String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources
}

begin
  # Get a reward by id
  result = api_instance.get_reward(reward_id, opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling RewardsApi->get_reward: #{e}"
end
```

#### Using the get_reward_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<GetReward200Response>, Integer, Hash)> get_reward_with_http_info(reward_id, opts)

```ruby
begin
  # Get a reward by id
  data, status_code, headers = api_instance.get_reward_with_http_info(reward_id, opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <GetReward200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling RewardsApi->get_reward_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **reward_id** | **String** |  |  |
| **include** | **String** | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources | [optional] |

### Return type

[**GetReward200Response**](GetReward200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json


## list_rewards

> <ListRewards200Response> list_rewards(opts)

List rewards

List rewards resources. Filtering, paging and sorting can be applied.

### Examples

```ruby
require 'time'
require 'unit_finance_sdk'
# setup authorization
UnitFinanceSdk.configure do |config|
  # Configure Bearer authorization (JWT): bearerAuth
  config.access_token = 'YOUR_BEARER_TOKEN'
end

api_instance = UnitFinanceSdk::RewardsApi.new
opts = {
  page_limit: 'page_limit_example', # String | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination.
  page_offset: 'page_offset_example', # String | Number of resources to skip. See Pagination.
  filter_transaction_id: 'filter_transaction_id_example', # String | Optional. Filters the results by the specified transaction id.
  filter_rewarded_transaction_id: 'filter_rewarded_transaction_id_example', # String | Optional. Filters the results by the specified rewarded transaction id.
  filter_receiving_account_id: 'filter_receiving_account_id_example', # String | Optional. Filters the results by the specified account id.
  filter_customer_id: 'filter_customer_id_example', # String | Optional. Filters the results by the specified customer id.
  filter_card_id: 'filter_card_id_example', # String | Optional. Filters the results by the specified card id.
  filter_status: 'filter_status_example', # String | Optional. Filter by reward Status. Usage example: filter[status][0]=Rejected.
  filter_since: 'filter_since_example', # String | Optional. Filters the rewards that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z
  filter_until: 'filter_until_example', # String | Optional. Filters the rewards that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z
  filter_tags: 'filter_tags_example', # String | Optional. Filter rewards by Tags.
  sort: 'sort_example', # String | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order.
  include: 'include_example' # String | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources
}

begin
  # List rewards
  result = api_instance.list_rewards(opts)
  p result
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling RewardsApi->list_rewards: #{e}"
end
```

#### Using the list_rewards_with_http_info variant

This returns an Array which contains the response data, status code and headers.

> <Array(<ListRewards200Response>, Integer, Hash)> list_rewards_with_http_info(opts)

```ruby
begin
  # List rewards
  data, status_code, headers = api_instance.list_rewards_with_http_info(opts)
  p status_code # => 2xx
  p headers # => { ... }
  p data # => <ListRewards200Response>
rescue UnitFinanceSdk::ApiError => e
  puts "Error when calling RewardsApi->list_rewards_with_http_info: #{e}"
end
```

### Parameters

| Name | Type | Description | Notes |
| ---- | ---- | ----------- | ----- |
| **page_limit** | **String** | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional][default to &#39;100&#39;] |
| **page_offset** | **String** | Number of resources to skip. See Pagination. | [optional][default to &#39;0&#39;] |
| **filter_transaction_id** | **String** | Optional. Filters the results by the specified transaction id. | [optional] |
| **filter_rewarded_transaction_id** | **String** | Optional. Filters the results by the specified rewarded transaction id. | [optional] |
| **filter_receiving_account_id** | **String** | Optional. Filters the results by the specified account id. | [optional] |
| **filter_customer_id** | **String** | Optional. Filters the results by the specified customer id. | [optional] |
| **filter_card_id** | **String** | Optional. Filters the results by the specified card id. | [optional] |
| **filter_status** | **String** | Optional. Filter by reward Status. Usage example: filter[status][0]&#x3D;Rejected. | [optional] |
| **filter_since** | **String** | Optional. Filters the rewards that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z | [optional] |
| **filter_until** | **String** | Optional. Filters the rewards that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z | [optional] |
| **filter_tags** | **String** | Optional. Filter rewards by Tags. | [optional] |
| **sort** | **String** | Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional][default to &#39;-createdAt&#39;] |
| **include** | **String** | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources | [optional] |

### Return type

[**ListRewards200Response**](ListRewards200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/vnd.api+json

