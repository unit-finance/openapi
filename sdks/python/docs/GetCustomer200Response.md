# GetCustomer200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**ListCustomers200ResponseDataInner**](ListCustomers200ResponseDataInner.md) |  | 
**included** | [**List[AuthorizedUserType]**](AuthorizedUserType.md) |  | [optional] 

## Example

```python
from unit_finance_sdk.models.get_customer200_response import GetCustomer200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetCustomer200Response from a JSON string
get_customer200_response_instance = GetCustomer200Response.from_json(json)
# print the JSON string representation of the object
print(GetCustomer200Response.to_json())

# convert the object into a dict
get_customer200_response_dict = get_customer200_response_instance.to_dict()
# create an instance of GetCustomer200Response from a dict
get_customer200_response_from_dict = GetCustomer200Response.from_dict(get_customer200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


