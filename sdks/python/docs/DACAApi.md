# unit_finance_sdk.DACAApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**activate_control_agreement**](DACAApi.md#activate_control_agreement) | **POST** /accounts/{accountId}/activate-daca | Activate control agreement
[**deactivate_control_agreement**](DACAApi.md#deactivate_control_agreement) | **POST** /accounts/{accountId}/deactivate-daca | Deactivate control agreement
[**enter_control_agreement**](DACAApi.md#enter_control_agreement) | **POST** /accounts/{accountId}/enter-daca | Enter control agreement


# **activate_control_agreement**
> EnterControlAgreement200Response activate_control_agreement(account_id, body=body)

Activate control agreement

Set an account with DACA `Activated` status. This action will:

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.enter_control_agreement200_response import EnterControlAgreement200Response
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
    api_instance = unit_finance_sdk.DACAApi(api_client)
    account_id = 'account_id_example' # str | 
    body = None # object |  (optional)

    try:
        # Activate control agreement
        api_response = api_instance.activate_control_agreement(account_id, body=body)
        print("The response of DACAApi->activate_control_agreement:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DACAApi->activate_control_agreement: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**|  | 
 **body** | **object**|  | [optional] 

### Return type

[**EnterControlAgreement200Response**](EnterControlAgreement200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deposit account resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **deactivate_control_agreement**
> EnterControlAgreement200Response deactivate_control_agreement(account_id, body=body)

Deactivate control agreement

Deactivate an account with DACA `Activated` status. This action will:

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.enter_control_agreement200_response import EnterControlAgreement200Response
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
    api_instance = unit_finance_sdk.DACAApi(api_client)
    account_id = 'account_id_example' # str | 
    body = None # object |  (optional)

    try:
        # Deactivate control agreement
        api_response = api_instance.deactivate_control_agreement(account_id, body=body)
        print("The response of DACAApi->deactivate_control_agreement:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DACAApi->deactivate_control_agreement: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**|  | 
 **body** | **object**|  | [optional] 

### Return type

[**EnterControlAgreement200Response**](EnterControlAgreement200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deposit account resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enter_control_agreement**
> EnterControlAgreement200Response enter_control_agreement(account_id, body=body)

Enter control agreement

Set an account with DACA `Entered` status.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.enter_control_agreement200_response import EnterControlAgreement200Response
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
    api_instance = unit_finance_sdk.DACAApi(api_client)
    account_id = 'account_id_example' # str | 
    body = None # object |  (optional)

    try:
        # Enter control agreement
        api_response = api_instance.enter_control_agreement(account_id, body=body)
        print("The response of DACAApi->enter_control_agreement:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DACAApi->enter_control_agreement: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**|  | 
 **body** | **object**|  | [optional] 

### Return type

[**EnterControlAgreement200Response**](EnterControlAgreement200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The deposit account resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

