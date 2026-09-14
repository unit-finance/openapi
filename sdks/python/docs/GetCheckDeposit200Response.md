# GetCheckDeposit200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**CheckDeposit**](CheckDeposit.md) |  | 
**included** | [**List[DepositAccount]**](DepositAccount.md) | Array of resources requested by the include query parameter. | [optional] 

## Example

```python
from unit_finance_sdk.models.get_check_deposit200_response import GetCheckDeposit200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetCheckDeposit200Response from a JSON string
get_check_deposit200_response_instance = GetCheckDeposit200Response.from_json(json)
# print the JSON string representation of the object
print(GetCheckDeposit200Response.to_json())

# convert the object into a dict
get_check_deposit200_response_dict = get_check_deposit200_response_instance.to_dict()
# create an instance of GetCheckDeposit200Response from a dict
get_check_deposit200_response_from_dict = GetCheckDeposit200Response.from_dict(get_check_deposit200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


