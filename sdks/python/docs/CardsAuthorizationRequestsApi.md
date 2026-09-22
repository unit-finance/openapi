# unit_finance_sdk.CardsAuthorizationRequestsApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_authorization_request_by_id**](CardsAuthorizationRequestsApi.md#get_authorization_request_by_id) | **GET** /authorization-requests/{id} | Get an authorization request by id
[**list_authorization_requests**](CardsAuthorizationRequestsApi.md#list_authorization_requests) | **GET** /authorization-requests | List authorization requests


# **get_authorization_request_by_id**
> GetAuthorizationRequestById200Response get_authorization_request_by_id(id)

Get an authorization request by id

Get an authorization request resource by id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_authorization_request_by_id200_response import GetAuthorizationRequestById200Response
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
    api_instance = unit_finance_sdk.CardsAuthorizationRequestsApi(api_client)
    id = 'id_example' # str | 

    try:
        # Get an authorization request by id
        api_response = api_instance.get_authorization_request_by_id(id)
        print("The response of CardsAuthorizationRequestsApi->get_authorization_request_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CardsAuthorizationRequestsApi->get_authorization_request_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**GetAuthorizationRequestById200Response**](GetAuthorizationRequestById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Authorization Request resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_authorization_requests**
> ListAuthorizationRequests200Response list_authorization_requests(page_limit=page_limit, page_offset=page_offset, filter_account_id=filter_account_id, filter_customer_id=filter_customer_id, filter_merchant_category_code=filter_merchant_category_code, filter_from_amount=filter_from_amount, filter_to_amount=filter_to_amount)

List authorization requests

List authorization requests. Filtering and paging can be applied.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_authorization_requests200_response import ListAuthorizationRequests200Response
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
    api_instance = unit_finance_sdk.CardsAuthorizationRequestsApi(api_client)
    page_limit = '100' # str | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. (optional) (default to '100')
    page_offset = '0' # str | Optional. Number of resources to skip. (optional) (default to '0')
    filter_account_id = 'filter_account_id_example' # str | Optional. Filters the results by the specified account id. (optional)
    filter_customer_id = 'filter_customer_id_example' # str | Optional. Filters the results by the specified customer id. (optional)
    filter_merchant_category_code = 'filter_merchant_category_code_example' # str | Optional. Filter result by their 4-digit ISO 18245 merchant category code (MCC). (optional)
    filter_from_amount = 'filter_from_amount_example' # str | Optional. Filters the result that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 (optional)
    filter_to_amount = 'filter_to_amount_example' # str | Optional. Filters the result that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 (optional)

    try:
        # List authorization requests
        api_response = api_instance.list_authorization_requests(page_limit=page_limit, page_offset=page_offset, filter_account_id=filter_account_id, filter_customer_id=filter_customer_id, filter_merchant_category_code=filter_merchant_category_code, filter_from_amount=filter_from_amount, filter_to_amount=filter_to_amount)
        print("The response of CardsAuthorizationRequestsApi->list_authorization_requests:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CardsAuthorizationRequestsApi->list_authorization_requests: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. | [optional] [default to &#39;100&#39;]
 **page_offset** | **str**| Optional. Number of resources to skip. | [optional] [default to &#39;0&#39;]
 **filter_account_id** | **str**| Optional. Filters the results by the specified account id. | [optional] 
 **filter_customer_id** | **str**| Optional. Filters the results by the specified customer id. | [optional] 
 **filter_merchant_category_code** | **str**| Optional. Filter result by their 4-digit ISO 18245 merchant category code (MCC). | [optional] 
 **filter_from_amount** | **str**| Optional. Filters the result that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 | [optional] 
 **filter_to_amount** | **str**| Optional. Filters the result that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 | [optional] 

### Return type

[**ListAuthorizationRequests200Response**](ListAuthorizationRequests200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of authorization request resources. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

