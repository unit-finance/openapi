# unit_finance_sdk.CardsATMLocationsApi

All URIs are relative to *https://api.s.unit.sh*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_atm_locations**](CardsATMLocationsApi.md#list_atm_locations) | **GET** /atm-locations | List ATM locations


# **list_atm_locations**
> ListAtmLocations200Response list_atm_locations(filter_address=filter_address, filter_coordinates=filter_coordinates, filter_postal_code=filter_postal_code, filter_search_radius=filter_search_radius)

List ATM locations

List ATM locations by address, by coordinates, or by postal code.

### Example

* Bearer (JWT) Authentication (bearerAuth):

```python
import unit_finance_sdk
from unit_finance_sdk.models.list_atm_locations200_response import ListAtmLocations200Response
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
    api_instance = unit_finance_sdk.CardsATMLocationsApi(api_client)
    filter_address = 'filter_address_example' # str | Filters the results by the specified address. (optional)
    filter_coordinates = 'filter_coordinates_example' # str | Filters the results by the specified coordinates. (optional)
    filter_postal_code = 'filter_postal_code_example' # str | Filters the results by the specified postal code. (optional)
    filter_search_radius = 'filter_search_radius_example' # str | Filters the results by the search radius (in miles). Default and max values are 100. (optional)

    try:
        # List ATM locations
        api_response = api_instance.list_atm_locations(filter_address=filter_address, filter_coordinates=filter_coordinates, filter_postal_code=filter_postal_code, filter_search_radius=filter_search_radius)
        print("The response of CardsATMLocationsApi->list_atm_locations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CardsATMLocationsApi->list_atm_locations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_address** | **str**| Filters the results by the specified address. | [optional] 
 **filter_coordinates** | **str**| Filters the results by the specified coordinates. | [optional] 
 **filter_postal_code** | **str**| Filters the results by the specified postal code. | [optional] 
 **filter_search_radius** | **str**| Filters the results by the search radius (in miles). Default and max values are 100. | [optional] 

### Return type

[**ListAtmLocations200Response**](ListAtmLocations200Response.md)

### Authorization

[bearerAuth](../README.md#bearerAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Array of ATM Location resources. |  -  |
**400** | Bad request. The request body or query parameters failed validation; &#x60;errors[].source.pointer&#x60; identifies the offending field. |  -  |
**401** | Unauthorized. The bearer token is missing, invalid or expired. |  -  |
**404** | Not found. No resource matches the supplied identifier. |  -  |
**0** | Error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

