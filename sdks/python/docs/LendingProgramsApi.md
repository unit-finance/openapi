# unit_finance_sdk.LendingProgramsApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_lending_program_by_id**](LendingProgramsApi.md#get_lending_program_by_id) | **GET** /lending-programs/{id} | Get lending program by id
[**get_lending_program_extended_information_by_id**](LendingProgramsApi.md#get_lending_program_extended_information_by_id) | **GET** /lending-programs/{id}/extended | Get lending program extended information by id
[**list_lending_programs**](LendingProgramsApi.md#list_lending_programs) | **GET** /lending-programs | List lending programs


# **get_lending_program_by_id**
> GetLendingProgramById200Response get_lending_program_by_id(id)

Get lending program by id

Get a lending program resource by id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_lending_program_by_id200_response import GetLendingProgramById200Response
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
    api_instance = unit_finance_sdk.LendingProgramsApi(api_client)
    id = 'id_example' # str | 

    try:
        # Get lending program by id
        api_response = api_instance.get_lending_program_by_id(id)
        print("The response of LendingProgramsApi->get_lending_program_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LendingProgramsApi->get_lending_program_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**GetLendingProgramById200Response**](GetLendingProgramById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A lending-program resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_lending_program_extended_information_by_id**
> GetLendingProgramExtendedInformationById200Response get_lending_program_extended_information_by_id(id)

Get lending program extended information by id

Get lending program extended information resource by id.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.get_lending_program_extended_information_by_id200_response import GetLendingProgramExtendedInformationById200Response
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
    api_instance = unit_finance_sdk.LendingProgramsApi(api_client)
    id = 'id_example' # str | 

    try:
        # Get lending program extended information by id
        api_response = api_instance.get_lending_program_extended_information_by_id(id)
        print("The response of LendingProgramsApi->get_lending_program_extended_information_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LendingProgramsApi->get_lending_program_extended_information_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**GetLendingProgramExtendedInformationById200Response**](GetLendingProgramExtendedInformationById200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A lending-program extended information resource. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_lending_programs**
> ListLendingPrograms200Response list_lending_programs(page_limit=page_limit, page_offset=page_offset, filter_name=filter_name, filter_program_type=filter_program_type, filter_min_program_limit=filter_min_program_limit, filter_org_id=filter_org_id, filter_bank_id=filter_bank_id)

List lending programs

List lending program resources. Paging can be applied.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_lending_programs200_response import ListLendingPrograms200Response
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
    api_instance = unit_finance_sdk.LendingProgramsApi(api_client)
    page_limit = '100' # str | Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. (optional) (default to '100')
    page_offset = '0' # str | Optional. Number of resources to skip. See Pagination. (optional) (default to '0')
    filter_name = 'filter_name_example' # str | Optional. Filters the results by the specified program name. (optional)
    filter_program_type = 'filter_program_type_example' # str | Optional. Filters the results by the specified Lending Program Type. (optional)
    filter_min_program_limit = 'filter_min_program_limit_example' # str | Optional. Filters the results by a maximum value of programSizeLimit. (optional)
    filter_org_id = 'filter_org_id_example' # str | Optional. Filters the results by the specified org id. (optional)
    filter_bank_id = 'filter_bank_id_example' # str | Optional. Filters the results by the specified bank id. (optional)

    try:
        # List lending programs
        api_response = api_instance.list_lending_programs(page_limit=page_limit, page_offset=page_offset, filter_name=filter_name, filter_program_type=filter_program_type, filter_min_program_limit=filter_min_program_limit, filter_org_id=filter_org_id, filter_bank_id=filter_bank_id)
        print("The response of LendingProgramsApi->list_lending_programs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LendingProgramsApi->list_lending_programs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| Optional. Maximum number of resources that will be returned. Maximum is 1000 resources. See Pagination. | [optional] [default to &#39;100&#39;]
 **page_offset** | **str**| Optional. Number of resources to skip. See Pagination. | [optional] [default to &#39;0&#39;]
 **filter_name** | **str**| Optional. Filters the results by the specified program name. | [optional] 
 **filter_program_type** | **str**| Optional. Filters the results by the specified Lending Program Type. | [optional] 
 **filter_min_program_limit** | **str**| Optional. Filters the results by a maximum value of programSizeLimit. | [optional] 
 **filter_org_id** | **str**| Optional. Filters the results by the specified org id. | [optional] 
 **filter_bank_id** | **str**| Optional. Filters the results by the specified bank id. | [optional] 

### Return type

[**ListLendingPrograms200Response**](ListLendingPrograms200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of lending-program resources. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

