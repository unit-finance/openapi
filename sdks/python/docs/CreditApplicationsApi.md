# unit_finance_sdk.CreditApplicationsApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_credit_application**](CreditApplicationsApi.md#create_credit_application) | **POST** /credit-applications | Create a credit application
[**get_credit_application**](CreditApplicationsApi.md#get_credit_application) | **GET** /credit-applications/{creditApplicationId} | Get a credit application by id
[**list_credit_applications**](CreditApplicationsApi.md#list_credit_applications) | **GET** /credit-applications | List credit applications
[**update_credit_application**](CreditApplicationsApi.md#update_credit_application) | **PATCH** /credit-applications/{creditApplicationId} | Update a credit application


# **create_credit_application**
> CreateCreditApplication201Response create_credit_application(create_credit_application_request)

Create a credit application

Create a credit application. The request body is one of CreateExistingCreditApplicationRequest (an existing customer, related to a customer) or CreateOnboardingCreditApplicationRequest (a customer being onboarded, related to an application).

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_credit_application201_response import CreateCreditApplication201Response
from unit_finance_sdk.models.create_credit_application_request import CreateCreditApplicationRequest
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
    api_instance = unit_finance_sdk.CreditApplicationsApi(api_client)
    create_credit_application_request = unit_finance_sdk.CreateCreditApplicationRequest() # CreateCreditApplicationRequest | 

    try:
        # Create a credit application
        api_response = api_instance.create_credit_application(create_credit_application_request)
        print("The response of CreditApplicationsApi->create_credit_application:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CreditApplicationsApi->create_credit_application: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_credit_application_request** | [**CreateCreditApplicationRequest**](CreateCreditApplicationRequest.md)|  | 

### Return type

[**CreateCreditApplication201Response**](CreateCreditApplication201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The returned resource after the operation was completed. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_credit_application**
> CreateCreditApplication201Response get_credit_application(credit_application_id)

Get a credit application by id

Get a credit application resource by id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_credit_application201_response import CreateCreditApplication201Response
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
    api_instance = unit_finance_sdk.CreditApplicationsApi(api_client)
    credit_application_id = 'credit_application_id_example' # str | 

    try:
        # Get a credit application by id
        api_response = api_instance.get_credit_application(credit_application_id)
        print("The response of CreditApplicationsApi->get_credit_application:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CreditApplicationsApi->get_credit_application: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credit_application_id** | **str**|  | 

### Return type

[**CreateCreditApplication201Response**](CreateCreditApplication201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A credit application resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_credit_applications**
> ListCreditApplications200Response list_credit_applications(page_limit=page_limit, page_offset=page_offset, filter_lending_program_id=filter_lending_program_id, filter_org_id=filter_org_id, filter_bank_id=filter_bank_id, filter_application_id=filter_application_id, filter_customer_id=filter_customer_id)

List credit applications

List credit applications resources. Paging can be applied.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_credit_applications200_response import ListCreditApplications200Response
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
    api_instance = unit_finance_sdk.CreditApplicationsApi(api_client)
    page_limit = '100' # str | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
    page_offset = '0' # str | Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
    filter_lending_program_id = 'filter_lending_program_id_example' # str | Optional. Search resources by lending program id. (optional)
    filter_org_id = 'filter_org_id_example' # str | Optional. Search resources by organization id. (optional)
    filter_bank_id = 'filter_bank_id_example' # str | Optional. Search resources by bank id. (optional)
    filter_application_id = 'filter_application_id_example' # str | Optional. Search resources by application id. (optional)
    filter_customer_id = 'filter_customer_id_example' # str | Optional. Search resources by customer id. (optional)

    try:
        # List credit applications
        api_response = api_instance.list_credit_applications(page_limit=page_limit, page_offset=page_offset, filter_lending_program_id=filter_lending_program_id, filter_org_id=filter_org_id, filter_bank_id=filter_bank_id, filter_application_id=filter_application_id, filter_customer_id=filter_customer_id)
        print("The response of CreditApplicationsApi->list_credit_applications:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CreditApplicationsApi->list_credit_applications: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to &#39;100&#39;]
 **page_offset** | **str**| Optional. Number of resources to skip. See Pagination. | [optional] [default to &#39;0&#39;]
 **filter_lending_program_id** | **str**| Optional. Search resources by lending program id. | [optional] 
 **filter_org_id** | **str**| Optional. Search resources by organization id. | [optional] 
 **filter_bank_id** | **str**| Optional. Search resources by bank id. | [optional] 
 **filter_application_id** | **str**| Optional. Search resources by application id. | [optional] 
 **filter_customer_id** | **str**| Optional. Search resources by customer id. | [optional] 

### Return type

[**ListCreditApplications200Response**](ListCreditApplications200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of credit application resources. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_credit_application**
> CreateCreditApplication201Response update_credit_application(credit_application_id, update_credit_application_request)

Update a credit application

Update a credit application.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_credit_application201_response import CreateCreditApplication201Response
from unit_finance_sdk.models.update_credit_application_request import UpdateCreditApplicationRequest
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
    api_instance = unit_finance_sdk.CreditApplicationsApi(api_client)
    credit_application_id = 'credit_application_id_example' # str | 
    update_credit_application_request = unit_finance_sdk.UpdateCreditApplicationRequest() # UpdateCreditApplicationRequest | 

    try:
        # Update a credit application
        api_response = api_instance.update_credit_application(credit_application_id, update_credit_application_request)
        print("The response of CreditApplicationsApi->update_credit_application:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CreditApplicationsApi->update_credit_application: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **credit_application_id** | **str**|  | 
 **update_credit_application_request** | [**UpdateCreditApplicationRequest**](UpdateCreditApplicationRequest.md)|  | 

### Return type

[**CreateCreditApplication201Response**](CreateCreditApplication201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested resource after the operation was completed. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

