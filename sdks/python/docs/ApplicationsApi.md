# unit_finance_sdk.ApplicationsApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_application**](ApplicationsApi.md#cancel_application) | **POST** /applications/{id}/cancel | Cancel an application
[**check_registered_agent_address**](ApplicationsApi.md#check_registered_agent_address) | **POST** /applications/check-registered-agent-address | Check a registered agent address
[**create_application**](ApplicationsApi.md#create_application) | **POST** /applications | Create an application
[**get_by_id**](ApplicationsApi.md#get_by_id) | **GET** /applications/{id} | Get an application
[**list**](ApplicationsApi.md#list) | **GET** /applications | List applications
[**update_application**](ApplicationsApi.md#update_application) | **PATCH** /applications/{id} | Update an application
[**update_business_beneficial_owner**](ApplicationsApi.md#update_business_beneficial_owner) | **PATCH** /beneficial-owner/{id} | Update a business beneficial owner


# **cancel_application**
> CancelApplication201Response cancel_application(id, cancel_application_request)

Cancel an application

Cancel an Application under `PendingReview` or `AwaitingDocuments` status. The application.canceled webhook event will be fired.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.cancel_application201_response import CancelApplication201Response
from unit_finance_sdk.models.cancel_application_request import CancelApplicationRequest
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
    api_instance = unit_finance_sdk.ApplicationsApi(api_client)
    id = 'id_example' # str | 
    cancel_application_request = unit_finance_sdk.CancelApplicationRequest() # CancelApplicationRequest | 

    try:
        # Cancel an application
        api_response = api_instance.cancel_application(id, cancel_application_request)
        print("The response of ApplicationsApi->cancel_application:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationsApi->cancel_application: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **cancel_application_request** | [**CancelApplicationRequest**](CancelApplicationRequest.md)|  | 

### Return type

[**CancelApplication201Response**](CancelApplication201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The canceled application resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **check_registered_agent_address**
> CheckRegisteredAgentAddress200Response check_registered_agent_address(check_registered_agent_address_request)

Check a registered agent address

Checks if an address is a registered agent address.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.check_registered_agent_address200_response import CheckRegisteredAgentAddress200Response
from unit_finance_sdk.models.check_registered_agent_address_request import CheckRegisteredAgentAddressRequest
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
    api_instance = unit_finance_sdk.ApplicationsApi(api_client)
    check_registered_agent_address_request = unit_finance_sdk.CheckRegisteredAgentAddressRequest() # CheckRegisteredAgentAddressRequest | 

    try:
        # Check a registered agent address
        api_response = api_instance.check_registered_agent_address(check_registered_agent_address_request)
        print("The response of ApplicationsApi->check_registered_agent_address:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationsApi->check_registered_agent_address: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **check_registered_agent_address_request** | [**CheckRegisteredAgentAddressRequest**](CheckRegisteredAgentAddressRequest.md)|  | 

### Return type

[**CheckRegisteredAgentAddress200Response**](CheckRegisteredAgentAddress200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Whether the supplied address is a registered agent address. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_application**
> CreateApplication201Response create_application(create_application_request)

Create an application

Create an application. Variants:
- **CreateBusinessApplication**
- **CreateIndividualApplication**
- **CreateSoleProprietorApplication**

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_application201_response import CreateApplication201Response
from unit_finance_sdk.models.create_application_request import CreateApplicationRequest
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
    api_instance = unit_finance_sdk.ApplicationsApi(api_client)
    create_application_request = unit_finance_sdk.CreateApplicationRequest() # CreateApplicationRequest | 

    try:
        # Create an application
        api_response = api_instance.create_application(create_application_request)
        print("The response of ApplicationsApi->create_application:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationsApi->create_application: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_application_request** | [**CreateApplicationRequest**](CreateApplicationRequest.md)|  | 

### Return type

[**CreateApplication201Response**](CreateApplication201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The created application resource - a business or individual application, indicated by the &#x60;type&#x60; field. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_by_id**
> CreateApplication201Response get_by_id(id)

Get an application

Get an application resource by id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_application201_response import CreateApplication201Response
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
    api_instance = unit_finance_sdk.ApplicationsApi(api_client)
    id = 'id_example' # str | 

    try:
        # Get an application
        api_response = api_instance.get_by_id(id)
        print("The response of ApplicationsApi->get_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationsApi->get_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**CreateApplication201Response**](CreateApplication201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested application resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list**
> List200Response list(page_limit=page_limit, page_offset=page_offset, filter_query=filter_query, filter_status=filter_status, filter_email=filter_email, filter_tags=filter_tags, sort=sort)

List applications

List application resources. Paging can be applied.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list200_response import List200Response
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
    api_instance = unit_finance_sdk.ApplicationsApi(api_client)
    page_limit = '100' # str | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. Sent as a numeric string (query parameters are strings in HTTP). (optional) (default to '100')
    page_offset = '0' # str | Optional. Number of resources to skip. See Pagination. Sent as a numeric string (query parameters are strings in HTTP). (optional) (default to '0')
    filter_query = 'filter_query_example' # str | Optional. Search term according to the Full-Text Search Rules. (optional)
    filter_status = 'filter_status_example' # str | Optional. Filter applications by Application Status. Usage example: *filter[status][0]=Pending&filter[status][1]=Approved* (optional)
    filter_email = 'filter_email_example' # str | Optional. Filter applications by email address (case sensitive). (optional)
    filter_tags = 'filter_tags_example' # str | Optional. Filter Applications by Tags. (optional)
    sort = '-createdAt' # str | Optional. sort=createdAt for ascending order or sort=-createdAt (leading minus sign) for descending order. (optional) (default to '-createdAt')

    try:
        # List applications
        api_response = api_instance.list(page_limit=page_limit, page_offset=page_offset, filter_query=filter_query, filter_status=filter_status, filter_email=filter_email, filter_tags=filter_tags, sort=sort)
        print("The response of ApplicationsApi->list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationsApi->list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. Sent as a numeric string (query parameters are strings in HTTP). | [optional] [default to &#39;100&#39;]
 **page_offset** | **str**| Optional. Number of resources to skip. See Pagination. Sent as a numeric string (query parameters are strings in HTTP). | [optional] [default to &#39;0&#39;]
 **filter_query** | **str**| Optional. Search term according to the Full-Text Search Rules. | [optional] 
 **filter_status** | **str**| Optional. Filter applications by Application Status. Usage example: *filter[status][0]&#x3D;Pending&amp;filter[status][1]&#x3D;Approved* | [optional] 
 **filter_email** | **str**| Optional. Filter applications by email address (case sensitive). | [optional] 
 **filter_tags** | **str**| Optional. Filter Applications by Tags. | [optional] 
 **sort** | **str**| Optional. sort&#x3D;createdAt for ascending order or sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to &#39;-createdAt&#39;]

### Return type

[**List200Response**](List200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A page of application resources, optionally filtered and sorted. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_application**
> CreateApplication201Response update_application(id, update_application_request)

Update an application

Update an application. Variants:
- **UpdateBusiness**
- **UpdateBusinessOfficer**
- **UpdateIndividual**
- **UpdateSoleProprietor**

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_application201_response import CreateApplication201Response
from unit_finance_sdk.models.update_application_request import UpdateApplicationRequest
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
    api_instance = unit_finance_sdk.ApplicationsApi(api_client)
    id = 'id_example' # str | 
    update_application_request = unit_finance_sdk.UpdateApplicationRequest() # UpdateApplicationRequest | 

    try:
        # Update an application
        api_response = api_instance.update_application(id, update_application_request)
        print("The response of ApplicationsApi->update_application:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationsApi->update_application: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **update_application_request** | [**UpdateApplicationRequest**](UpdateApplicationRequest.md)|  | 

### Return type

[**CreateApplication201Response**](CreateApplication201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Returns the updated application resource, which is a business or individual application as indicated by the &#x60;type&#x60; field. Note: this endpoint responds with HTTP 201 (not 200) for a successful update; this reflects the live Unit API behavior (verified against the sandbox at https://api.s.unit.sh). |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_business_beneficial_owner**
> UpdateBusinessBeneficialOwner201Response update_business_beneficial_owner(id, update_business_beneficial_owner_request)

Update a business beneficial owner

Update a business application's beneficial owner. The application id associated with the beneficial owner must be passed as a relationship in the request body.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.update_business_beneficial_owner201_response import UpdateBusinessBeneficialOwner201Response
from unit_finance_sdk.models.update_business_beneficial_owner_request import UpdateBusinessBeneficialOwnerRequest
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
    api_instance = unit_finance_sdk.ApplicationsApi(api_client)
    id = 'id_example' # str | 
    update_business_beneficial_owner_request = unit_finance_sdk.UpdateBusinessBeneficialOwnerRequest() # UpdateBusinessBeneficialOwnerRequest | 

    try:
        # Update a business beneficial owner
        api_response = api_instance.update_business_beneficial_owner(id, update_business_beneficial_owner_request)
        print("The response of ApplicationsApi->update_business_beneficial_owner:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ApplicationsApi->update_business_beneficial_owner: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **update_business_beneficial_owner_request** | [**UpdateBusinessBeneficialOwnerRequest**](UpdateBusinessBeneficialOwnerRequest.md)|  | 

### Return type

[**UpdateBusinessBeneficialOwner201Response**](UpdateBusinessBeneficialOwner201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The updated beneficial owner resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

