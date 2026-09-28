# GetTotalAccruedInterest200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**TotalAccruedInterestType**](TotalAccruedInterestType.md) | The requested resource after the operation was completed. | 

## Example

```python
from unit_finance_sdk.models.get_total_accrued_interest200_response import GetTotalAccruedInterest200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetTotalAccruedInterest200Response from a JSON string
get_total_accrued_interest200_response_instance = GetTotalAccruedInterest200Response.from_json(json)
# print the JSON string representation of the object
print(GetTotalAccruedInterest200Response.to_json())

# convert the object into a dict
get_total_accrued_interest200_response_dict = get_total_accrued_interest200_response_instance.to_dict()
# create an instance of GetTotalAccruedInterest200Response from a dict
get_total_accrued_interest200_response_from_dict = GetTotalAccruedInterest200Response.from_dict(get_total_accrued_interest200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


