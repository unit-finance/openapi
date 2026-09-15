# unit_finance_sdk.CounterpartiesApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_counterparty**](CounterpartiesApi.md#create_counterparty) | **POST** /counterparties | Create a counterparty
[**delete_counterparty**](CounterpartiesApi.md#delete_counterparty) | **DELETE** /counterparties/{counterpartyId} | Delete a counterparty
[**get_counterparty**](CounterpartiesApi.md#get_counterparty) | **GET** /counterparties/{counterpartyId} | Get a counterparty by id
[**get_counterparty_balance**](CounterpartiesApi.md#get_counterparty_balance) | **GET** /counterparties/{counterpartyId}/balance | Get a counterparty balance by id
[**list_counterparties**](CounterpartiesApi.md#list_counterparties) | **GET** /counterparties | List counterparties
[**update_counterparty**](CounterpartiesApi.md#update_counterparty) | **PATCH** /counterparties/{counterpartyId} | Update a counterparty


# **create_counterparty**
> CreateCounterparty201Response create_counterparty(create_counterparty_body)

Create a counterparty

Creates an ACH counterparty for a specific customer. The request body is one of CreateCounterpartyRequest (account/routing number) or CreateCounterpartyWithPlaidTokenRequest (Plaid processor token).

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_counterparty201_response import CreateCounterparty201Response
from unit_finance_sdk.models.create_counterparty_body import CreateCounterpartyBody
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
    api_instance = unit_finance_sdk.CounterpartiesApi(api_client)
    create_counterparty_body = unit_finance_sdk.CreateCounterpartyBody() # CreateCounterpartyBody | 

    try:
        # Create a counterparty
        api_response = api_instance.create_counterparty(create_counterparty_body)
        print("The response of CounterpartiesApi->create_counterparty:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CounterpartiesApi->create_counterparty: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_counterparty_body** | [**CreateCounterpartyBody**](CreateCounterpartyBody.md)|  | 

### Return type

[**CreateCounterparty201Response**](CreateCounterparty201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The created counterparty resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_counterparty**
> delete_counterparty(counterparty_id, body=body)

Delete a counterparty

Delete a counterparty resource by id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
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
    api_instance = unit_finance_sdk.CounterpartiesApi(api_client)
    counterparty_id = 'counterparty_id_example' # str | 
    body = None # object |  (optional)

    try:
        # Delete a counterparty
        api_instance.delete_counterparty(counterparty_id, body=body)
    except Exception as e:
        print("Exception when calling CounterpartiesApi->delete_counterparty: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **counterparty_id** | **str**|  | 
 **body** | **object**|  | [optional] 

### Return type

void (empty response body)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The counterparty was deleted successfully. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_counterparty**
> CreateCounterparty201Response get_counterparty(counterparty_id)

Get a counterparty by id

Get a counterparty resource by id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_counterparty201_response import CreateCounterparty201Response
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
    api_instance = unit_finance_sdk.CounterpartiesApi(api_client)
    counterparty_id = 'counterparty_id_example' # str | 

    try:
        # Get a counterparty by id
        api_response = api_instance.get_counterparty(counterparty_id)
        print("The response of CounterpartiesApi->get_counterparty:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CounterpartiesApi->get_counterparty: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **counterparty_id** | **str**|  | 

### Return type

[**CreateCounterparty201Response**](CreateCounterparty201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Counterparty resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_counterparty_balance**
> GetCounterpartyBalance200Response get_counterparty_balance(counterparty_id)

Get a counterparty balance by id

Get a counterparty balance resource by id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_counterparty_balance200_response import GetCounterpartyBalance200Response
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
    api_instance = unit_finance_sdk.CounterpartiesApi(api_client)
    counterparty_id = 'counterparty_id_example' # str | 

    try:
        # Get a counterparty balance by id
        api_response = api_instance.get_counterparty_balance(counterparty_id)
        print("The response of CounterpartiesApi->get_counterparty_balance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CounterpartiesApi->get_counterparty_balance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **counterparty_id** | **str**|  | 

### Return type

[**GetCounterpartyBalance200Response**](GetCounterpartyBalance200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Counterparty Balance resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_counterparties**
> ListCounterparties200Response list_counterparties(page_limit=page_limit, page_offset=page_offset, filter_customer_id=filter_customer_id, filter_account_number=filter_account_number, filter_routing_number=filter_routing_number, filter_tags=filter_tags, filter_permissions=filter_permissions, sort=sort)

List counterparties

List counterparties. Filtering and paging can be applied.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_counterparties200_response import ListCounterparties200Response
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
    api_instance = unit_finance_sdk.CounterpartiesApi(api_client)
    page_limit = '100' # str | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
    page_offset = '0' # str | Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
    filter_customer_id = 'filter_customer_id_example' # str | Optional. Filters the results by the specified customer id. (optional)
    filter_account_number = 'filter_account_number_example' # str | Optional. Filters the results by the specified account number. (optional)
    filter_routing_number = 'filter_routing_number_example' # str | Optional. Filters the results by the specified routing number. (optional)
    filter_tags = 'filter_tags_example' # str | Optional. Filter Counterparties by Tags. (optional)
    filter_permissions = 'filter_permissions_example' # str | Optional. Filters the results by the specified counterparty permissions either CreditOnly, DebitOnly, CreditAndDebit. Usage example: *filter[permissions][0]=CreditOnly&filter[permissions][1]=CreditAndDebit* (optional)
    sort = 'createdAt' # str | Optional. sort=createdAt for ascending order or sort=-createdAt (leading minus sign) for descending order. (optional) (default to 'createdAt')

    try:
        # List counterparties
        api_response = api_instance.list_counterparties(page_limit=page_limit, page_offset=page_offset, filter_customer_id=filter_customer_id, filter_account_number=filter_account_number, filter_routing_number=filter_routing_number, filter_tags=filter_tags, filter_permissions=filter_permissions, sort=sort)
        print("The response of CounterpartiesApi->list_counterparties:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CounterpartiesApi->list_counterparties: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to &#39;100&#39;]
 **page_offset** | **str**| Optional. Number of resources to skip. See Pagination. | [optional] [default to &#39;0&#39;]
 **filter_customer_id** | **str**| Optional. Filters the results by the specified customer id. | [optional] 
 **filter_account_number** | **str**| Optional. Filters the results by the specified account number. | [optional] 
 **filter_routing_number** | **str**| Optional. Filters the results by the specified routing number. | [optional] 
 **filter_tags** | **str**| Optional. Filter Counterparties by Tags. | [optional] 
 **filter_permissions** | **str**| Optional. Filters the results by the specified counterparty permissions either CreditOnly, DebitOnly, CreditAndDebit. Usage example: *filter[permissions][0]&#x3D;CreditOnly&amp;filter[permissions][1]&#x3D;CreditAndDebit* | [optional] 
 **sort** | **str**| Optional. sort&#x3D;createdAt for ascending order or sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to &#39;createdAt&#39;]

### Return type

[**ListCounterparties200Response**](ListCounterparties200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of counterparty resources. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_counterparty**
> UpdateCounterparty200Response update_counterparty(counterparty_id, update_counterparty_request)

Update a counterparty

Update a Counterparty. Relink existing counterparty with a new Plaid processor token.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.update_counterparty200_response import UpdateCounterparty200Response
from unit_finance_sdk.models.update_counterparty_request import UpdateCounterpartyRequest
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
    api_instance = unit_finance_sdk.CounterpartiesApi(api_client)
    counterparty_id = 'counterparty_id_example' # str | 
    update_counterparty_request = unit_finance_sdk.UpdateCounterpartyRequest() # UpdateCounterpartyRequest | 

    try:
        # Update a counterparty
        api_response = api_instance.update_counterparty(counterparty_id, update_counterparty_request)
        print("The response of CounterpartiesApi->update_counterparty:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CounterpartiesApi->update_counterparty: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **counterparty_id** | **str**|  | 
 **update_counterparty_request** | [**UpdateCounterpartyRequest**](UpdateCounterpartyRequest.md)|  | 

### Return type

[**UpdateCounterparty200Response**](UpdateCounterparty200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The target resource after the operation was completed. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

