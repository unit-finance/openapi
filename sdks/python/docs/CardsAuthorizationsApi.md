# unit_finance_sdk.CardsAuthorizationsApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_authorization**](CardsAuthorizationsApi.md#get_authorization) | **GET** /authorizations/{id} | Get an authorization
[**list_authorizations**](CardsAuthorizationsApi.md#list_authorizations) | **GET** /authorizations | List authorizations
[**release_authorization**](CardsAuthorizationsApi.md#release_authorization) | **POST** /authorizations/{id}/release | Release an authorization


# **get_authorization**
> GetAuthorization200Response get_authorization(id, filter_include_non_authorized=filter_include_non_authorized)

Get an authorization

Get an authorization resource by id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_authorization200_response import GetAuthorization200Response
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
    api_instance = unit_finance_sdk.CardsAuthorizationsApi(api_client)
    id = 'id_example' # str | 
    filter_include_non_authorized = 'false' # str | Optional. Include authorizations from all statuses. (optional) (default to 'false')

    try:
        # Get an authorization
        api_response = api_instance.get_authorization(id, filter_include_non_authorized=filter_include_non_authorized)
        print("The response of CardsAuthorizationsApi->get_authorization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CardsAuthorizationsApi->get_authorization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **filter_include_non_authorized** | **str**| Optional. Include authorizations from all statuses. | [optional] [default to &#39;false&#39;]

### Return type

[**GetAuthorization200Response**](GetAuthorization200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Authorization resource. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_authorizations**
> ListAuthorizations200Response list_authorizations(page_limit=page_limit, page_offset=page_offset, filter_account_id=filter_account_id, filter_account_type=filter_account_type, filter_customer_id=filter_customer_id, filter_card_id=filter_card_id, filter_since=filter_since, filter_until=filter_until, filter_include_non_authorized=filter_include_non_authorized, filter_status=filter_status, filter_merchant_category_code=filter_merchant_category_code, filter_from_amount=filter_from_amount, filter_to_amount=filter_to_amount, sort=sort)

List authorizations

List authorizations. Filtering and sorting can be applied. Paging is available only when filtering by customer id or account id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_authorizations200_response import ListAuthorizations200Response
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
    api_instance = unit_finance_sdk.CardsAuthorizationsApi(api_client)
    page_limit = '100' # str | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. (optional) (default to '100')
    page_offset = '0' # str | Optional. Number of resources to skip. (optional) (default to '0')
    filter_account_id = 'filter_account_id_example' # str | Optional. Filters the results by the specified account id. (optional)
    filter_account_type = 'filter_account_type_example' # str | Optional. Filter the results by account type (deposit, credit). (optional)
    filter_customer_id = 'filter_customer_id_example' # str | Optional. Filters the results by the specified customer id. (optional)
    filter_card_id = 'filter_card_id_example' # str | Optional. Filters the results by the specified card id. (optional)
    filter_since = 'filter_since_example' # str | Optional. Filters the Authorizations that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z (optional)
    filter_until = 'filter_until_example' # str | Optional. Filters the Authorizations that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z (optional)
    filter_include_non_authorized = 'false' # str | Optional. Include authorizations from all statuses. (optional) (default to 'false')
    filter_status = 'Authorized' # str | Optional. Filter authorizations by Authorization Status. (optional) (default to 'Authorized')
    filter_merchant_category_code = 'filter_merchant_category_code_example' # str | Optional. Filter authorizations by their 4-digit ISO 18245 merchant category code (MCC). (optional)
    filter_from_amount = 'filter_from_amount_example' # str | Optional. Filters the Authorizations that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 (optional)
    filter_to_amount = 'filter_to_amount_example' # str | Optional. Filters the Authorizations that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 (optional)
    sort = '-createdAt' # str | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order. (optional) (default to '-createdAt')

    try:
        # List authorizations
        api_response = api_instance.list_authorizations(page_limit=page_limit, page_offset=page_offset, filter_account_id=filter_account_id, filter_account_type=filter_account_type, filter_customer_id=filter_customer_id, filter_card_id=filter_card_id, filter_since=filter_since, filter_until=filter_until, filter_include_non_authorized=filter_include_non_authorized, filter_status=filter_status, filter_merchant_category_code=filter_merchant_category_code, filter_from_amount=filter_from_amount, filter_to_amount=filter_to_amount, sort=sort)
        print("The response of CardsAuthorizationsApi->list_authorizations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CardsAuthorizationsApi->list_authorizations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. | [optional] [default to &#39;100&#39;]
 **page_offset** | **str**| Optional. Number of resources to skip. | [optional] [default to &#39;0&#39;]
 **filter_account_id** | **str**| Optional. Filters the results by the specified account id. | [optional] 
 **filter_account_type** | **str**| Optional. Filter the results by account type (deposit, credit). | [optional] 
 **filter_customer_id** | **str**| Optional. Filters the results by the specified customer id. | [optional] 
 **filter_card_id** | **str**| Optional. Filters the results by the specified card id. | [optional] 
 **filter_since** | **str**| Optional. Filters the Authorizations that occurred *after* the specified date. e.g. 2020-01-13T16:01:19.346Z | [optional] 
 **filter_until** | **str**| Optional. Filters the Authorizations that occurred *before* the specified date. e.g. 2020-01-02T20:06:23.486Z | [optional] 
 **filter_include_non_authorized** | **str**| Optional. Include authorizations from all statuses. | [optional] [default to &#39;false&#39;]
 **filter_status** | **str**| Optional. Filter authorizations by Authorization Status. | [optional] [default to &#39;Authorized&#39;]
 **filter_merchant_category_code** | **str**| Optional. Filter authorizations by their 4-digit ISO 18245 merchant category code (MCC). | [optional] 
 **filter_from_amount** | **str**| Optional. Filters the Authorizations that have an amount that is *higher or equal to* the specified amount (in cents). e.g. 5000 | [optional] 
 **filter_to_amount** | **str**| Optional. Filters the Authorizations that have an amount that is *lower or equal to* the specified amount (in cents). e.g. 7000 | [optional] 
 **sort** | **str**| Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to &#39;-createdAt&#39;]

### Return type

[**ListAuthorizations200Response**](ListAuthorizations200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of authorization resources. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **release_authorization**
> GetAuthorization200Response release_authorization(id, body=body)

Release an authorization

Manually release an authorization that is in `Authorized` status. This removes the authorization hold from the account so the **available** balance increases by the authorization amount (subject to other pending activity).

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_authorization200_response import GetAuthorization200Response
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
    api_instance = unit_finance_sdk.CardsAuthorizationsApi(api_client)
    id = 'id_example' # str | 
    body = None # object |  (optional)

    try:
        # Release an authorization
        api_response = api_instance.release_authorization(id, body=body)
        print("The response of CardsAuthorizationsApi->release_authorization:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CardsAuthorizationsApi->release_authorization: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **body** | **object**|  | [optional] 

### Return type

[**GetAuthorization200Response**](GetAuthorization200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Updated authorization. |  -  |
**0** | Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

