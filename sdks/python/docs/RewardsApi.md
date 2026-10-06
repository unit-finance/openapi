# unit_finance_sdk.RewardsApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_reward**](RewardsApi.md#create_reward) | **POST** /rewards | Create a reward
[**get_reward**](RewardsApi.md#get_reward) | **GET** /rewards/{rewardId} | Get a reward by id
[**list_rewards**](RewardsApi.md#list_rewards) | **GET** /rewards | List rewards


# **create_reward**
> CreateReward201Response create_reward(create_reward_request)

Create a reward

Creates a reward resource.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_reward201_response import CreateReward201Response
from unit_finance_sdk.models.create_reward_request import CreateRewardRequest
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.RewardsApi(api_client)
    create_reward_request = unit_finance_sdk.CreateRewardRequest() # CreateRewardRequest | 

    try:
        # Create a reward
        api_response = api_instance.create_reward(create_reward_request)
        print("The response of RewardsApi->create_reward:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RewardsApi->create_reward: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_reward_request** | [**CreateRewardRequest**](CreateRewardRequest.md)|  | 

### Return type

[**CreateReward201Response**](CreateReward201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The requested resource after the operation was completed. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_reward**
> GetReward200Response get_reward(reward_id, include=include)

Get a reward by id

Get a reward by id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_reward200_response import GetReward200Response
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.RewardsApi(api_client)
    reward_id = 'reward_id_example' # str | 
    include = 'include_example' # str | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources (optional)

    try:
        # Get a reward by id
        api_response = api_instance.get_reward(reward_id, include=include)
        print("The response of RewardsApi->get_reward:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RewardsApi->get_reward: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **reward_id** | **str**|  | 
 **include** | **str**| Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources | [optional] 

### Return type

[**GetReward200Response**](GetReward200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Reward resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_rewards**
> ListRewards200Response list_rewards(page_limit=page_limit, page_offset=page_offset, filter_transaction_id=filter_transaction_id, filter_rewarded_transaction_id=filter_rewarded_transaction_id, filter_receiving_account_id=filter_receiving_account_id, filter_customer_id=filter_customer_id, filter_card_id=filter_card_id, filter_status=filter_status, filter_since=filter_since, filter_until=filter_until, filter_tags=filter_tags, sort=sort, include=include)

List rewards

List rewards resources. Filtering, paging and sorting can be applied.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_rewards200_response import ListRewards200Response
from unit_finance_sdk.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.s.unit.sh
# See configuration.py for a list of all supported configuration parameters.
configuration = unit_finance_sdk.Configuration(
    host = "https://api.s.unit.sh"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): bearerAuth
configuration = unit_finance_sdk.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with unit_finance_sdk.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = unit_finance_sdk.RewardsApi(api_client)
    page_limit = '100' # str | Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
    page_offset = '0' # str | Number of resources to skip. See Pagination. (optional) (default to '0')
    filter_transaction_id = 'filter_transaction_id_example' # str | Optional. Filters the results by the specified transaction id. (optional)
    filter_rewarded_transaction_id = 'filter_rewarded_transaction_id_example' # str | Optional. Filters the results by the specified rewarded transaction id. (optional)
    filter_receiving_account_id = 'filter_receiving_account_id_example' # str | Optional. Filters the results by the specified account id. (optional)
    filter_customer_id = 'filter_customer_id_example' # str | Optional. Filters the results by the specified customer id. (optional)
    filter_card_id = 'filter_card_id_example' # str | Optional. Filters the results by the specified card id. (optional)
    filter_status = 'filter_status_example' # str | Optional. Filter by reward Status. Usage example: filter[status][0]=Rejected. (optional)
    filter_since = 'filter_since_example' # str | Optional. Filters the rewards that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z (optional)
    filter_until = 'filter_until_example' # str | Optional. Filters the rewards that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z (optional)
    filter_tags = 'filter_tags_example' # str | Optional. Filter rewards by Tags. (optional)
    sort = '-createdAt' # str | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order. (optional) (default to '-createdAt')
    include = 'include_example' # str | Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources (optional)

    try:
        # List rewards
        api_response = api_instance.list_rewards(page_limit=page_limit, page_offset=page_offset, filter_transaction_id=filter_transaction_id, filter_rewarded_transaction_id=filter_rewarded_transaction_id, filter_receiving_account_id=filter_receiving_account_id, filter_customer_id=filter_customer_id, filter_card_id=filter_card_id, filter_status=filter_status, filter_since=filter_since, filter_until=filter_until, filter_tags=filter_tags, sort=sort, include=include)
        print("The response of RewardsApi->list_rewards:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RewardsApi->list_rewards: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to &#39;100&#39;]
 **page_offset** | **str**| Number of resources to skip. See Pagination. | [optional] [default to &#39;0&#39;]
 **filter_transaction_id** | **str**| Optional. Filters the results by the specified transaction id. | [optional] 
 **filter_rewarded_transaction_id** | **str**| Optional. Filters the results by the specified rewarded transaction id. | [optional] 
 **filter_receiving_account_id** | **str**| Optional. Filters the results by the specified account id. | [optional] 
 **filter_customer_id** | **str**| Optional. Filters the results by the specified customer id. | [optional] 
 **filter_card_id** | **str**| Optional. Filters the results by the specified card id. | [optional] 
 **filter_status** | **str**| Optional. Filter by reward Status. Usage example: filter[status][0]&#x3D;Rejected. | [optional] 
 **filter_since** | **str**| Optional. Filters the rewards that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z | [optional] 
 **filter_until** | **str**| Optional. Filters the rewards that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z | [optional] 
 **filter_tags** | **str**| Optional. Filter rewards by Tags. | [optional] 
 **sort** | **str**| Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to &#39;-createdAt&#39;]
 **include** | **str**| Optional. A comma-separated list of related resources to include in the response. Related resources include: customer, account, transaction. See Getting Related Resources | [optional] 

### Return type

[**ListRewards200Response**](ListRewards200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of rewards resources. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

