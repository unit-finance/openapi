# unit_finance_sdk.RecurringRepaymentsApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_recurring_repayment**](RecurringRepaymentsApi.md#create_recurring_repayment) | **POST** /recurring-repayments | Create a recurring repayment
[**disable_recurring_repayment**](RecurringRepaymentsApi.md#disable_recurring_repayment) | **POST** /recurring-repayments/{id}/disable | Disable a recurring repayment
[**enable_recurring_repayment**](RecurringRepaymentsApi.md#enable_recurring_repayment) | **POST** /recurring-repayments/{id}/enable | Enable a recurring repayment
[**get_recurring_repayment**](RecurringRepaymentsApi.md#get_recurring_repayment) | **GET** /recurring-repayments/{id} | Get a recurring repayment by id
[**list_recurring_repayments**](RecurringRepaymentsApi.md#list_recurring_repayments) | **GET** /recurring-repayments | List recurring repayments


# **create_recurring_repayment**
> CreateRecurringRepayment201Response create_recurring_repayment(create_recurring_repayment_request)

Create a recurring repayment

Originate a recurring repayment. The request body is one of CreateRecurringACHRepaymentRequest, CreateRecurringBookRepaymentRequest, CreateRecurringCapitalPartnerACHRepaymentRequest, or CreateRecurringCapitalPartnerBookRepaymentRequest, discriminated by data.type (recurringAchRepayment, recurringBookRepayment) together with the relationships supplied — the capital partner variants omit the account relationship.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_recurring_repayment201_response import CreateRecurringRepayment201Response
from unit_finance_sdk.models.create_recurring_repayment_request import CreateRecurringRepaymentRequest
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
    api_instance = unit_finance_sdk.RecurringRepaymentsApi(api_client)
    create_recurring_repayment_request = unit_finance_sdk.CreateRecurringRepaymentRequest() # CreateRecurringRepaymentRequest | 

    try:
        # Create a recurring repayment
        api_response = api_instance.create_recurring_repayment(create_recurring_repayment_request)
        print("The response of RecurringRepaymentsApi->create_recurring_repayment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecurringRepaymentsApi->create_recurring_repayment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_recurring_repayment_request** | [**CreateRecurringRepaymentRequest**](CreateRecurringRepaymentRequest.md)|  | 

### Return type

[**CreateRecurringRepayment201Response**](CreateRecurringRepayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The created recurring repayment resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **disable_recurring_repayment**
> CreateRecurringRepayment201Response disable_recurring_repayment(id, body=body)

Disable a recurring repayment

Disable a Recurring Repayment by id. When a Recurring Repayment is disabled, the Recurring Repayment Status Changed webhook event is fired and future repayments will no longer be created according to the defined schedule.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_recurring_repayment201_response import CreateRecurringRepayment201Response
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
    api_instance = unit_finance_sdk.RecurringRepaymentsApi(api_client)
    id = 'id_example' # str | 
    body = None # object |  (optional)

    try:
        # Disable a recurring repayment
        api_response = api_instance.disable_recurring_repayment(id, body=body)
        print("The response of RecurringRepaymentsApi->disable_recurring_repayment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecurringRepaymentsApi->disable_recurring_repayment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **body** | **object**|  | [optional] 

### Return type

[**CreateRecurringRepayment201Response**](CreateRecurringRepayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Recurring Repayment resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **enable_recurring_repayment**
> CreateRecurringRepayment201Response enable_recurring_repayment(id, body=body)

Enable a recurring repayment

Enable a recurring repayment by id. When a Recurring Repayment is enabled, its status is set to Active according to the start date and end date that were defined in the schedule. See Recurring Repayment Statuses. When enabled, the Recurring Repayment Status Changed webhook event is fired.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_recurring_repayment201_response import CreateRecurringRepayment201Response
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
    api_instance = unit_finance_sdk.RecurringRepaymentsApi(api_client)
    id = 'id_example' # str | 
    body = None # object |  (optional)

    try:
        # Enable a recurring repayment
        api_response = api_instance.enable_recurring_repayment(id, body=body)
        print("The response of RecurringRepaymentsApi->enable_recurring_repayment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecurringRepaymentsApi->enable_recurring_repayment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **body** | **object**|  | [optional] 

### Return type

[**CreateRecurringRepayment201Response**](CreateRecurringRepayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: application/vnd.api+json
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Recurring Repayment resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_recurring_repayment**
> CreateRecurringRepayment201Response get_recurring_repayment(id)

Get a recurring repayment by id

Get a recurring repayment by id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.create_recurring_repayment201_response import CreateRecurringRepayment201Response
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
    api_instance = unit_finance_sdk.RecurringRepaymentsApi(api_client)
    id = 'id_example' # str | 

    try:
        # Get a recurring repayment by id
        api_response = api_instance.get_recurring_repayment(id)
        print("The response of RecurringRepaymentsApi->get_recurring_repayment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecurringRepaymentsApi->get_recurring_repayment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**CreateRecurringRepayment201Response**](CreateRecurringRepayment201Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Recurring Repayment resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_recurring_repayments**
> ListRecurringRepayments200Response list_recurring_repayments(page_limit=page_limit, page_offset=page_offset, filter_credit_account_id=filter_credit_account_id, filter_customer_id=filter_customer_id, filter_status=filter_status, filter_from_start_time=filter_from_start_time, filter_to_start_time=filter_to_start_time, sort=sort)

List recurring repayments

List recurring repayments resources. Filtering, paging and sorting can be applied.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_recurring_repayments200_response import ListRecurringRepayments200Response
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
    api_instance = unit_finance_sdk.RecurringRepaymentsApi(api_client)
    page_limit = '100' # str | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
    page_offset = '0' # str | Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
    filter_credit_account_id = 'filter_credit_account_id_example' # str | Optional. Filters the results by the specified credit account id. (optional)
    filter_customer_id = 'filter_customer_id_example' # str | Optional. Filters the results by the specified customer id. (optional)
    filter_status = 'filter_status_example' # str | Optional. Filter recurring repayments by status (Active or Disabled). Usage example: *filter[status]=Active (optional)
    filter_from_start_time = 'filter_from_start_time_example' # str | Optional. Filters the Recurring Repayments that their start time occurred *after* the specified date. e.g. 2022-06-13 (optional)
    filter_to_start_time = 'filter_to_start_time_example' # str | Optional. Filters the Recurring Repayments that their start time occurred *before* the specified date. e.g. 2022-05-13 (optional)
    sort = '-createdAt' # str | Optional. Leave empty or provide sort=createdAt for ascending order. Provide sort=-createdAt (leading minus sign) for descending order. (optional) (default to '-createdAt')

    try:
        # List recurring repayments
        api_response = api_instance.list_recurring_repayments(page_limit=page_limit, page_offset=page_offset, filter_credit_account_id=filter_credit_account_id, filter_customer_id=filter_customer_id, filter_status=filter_status, filter_from_start_time=filter_from_start_time, filter_to_start_time=filter_to_start_time, sort=sort)
        print("The response of RecurringRepaymentsApi->list_recurring_repayments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecurringRepaymentsApi->list_recurring_repayments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to &#39;100&#39;]
 **page_offset** | **str**| Optional. Number of resources to skip. See Pagination. | [optional] [default to &#39;0&#39;]
 **filter_credit_account_id** | **str**| Optional. Filters the results by the specified credit account id. | [optional] 
 **filter_customer_id** | **str**| Optional. Filters the results by the specified customer id. | [optional] 
 **filter_status** | **str**| Optional. Filter recurring repayments by status (Active or Disabled). Usage example: *filter[status]&#x3D;Active | [optional] 
 **filter_from_start_time** | **str**| Optional. Filters the Recurring Repayments that their start time occurred *after* the specified date. e.g. 2022-06-13 | [optional] 
 **filter_to_start_time** | **str**| Optional. Filters the Recurring Repayments that their start time occurred *before* the specified date. e.g. 2022-05-13 | [optional] 
 **sort** | **str**| Optional. Leave empty or provide sort&#x3D;createdAt for ascending order. Provide sort&#x3D;-createdAt (leading minus sign) for descending order. | [optional] [default to &#39;-createdAt&#39;]

### Return type

[**ListRecurringRepayments200Response**](ListRecurringRepayments200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of recurring repayment resources. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

