# GetDisputeById200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**Dispute**](Dispute.md) |  | 

## Example

```python
from unit_finance_sdk.models.get_dispute_by_id200_response import GetDisputeById200Response

# TODO update the JSON string below
json = "{}"
# create an instance of GetDisputeById200Response from a JSON string
get_dispute_by_id200_response_instance = GetDisputeById200Response.from_json(json)
# print the JSON string representation of the object
print(GetDisputeById200Response.to_json())

# convert the object into a dict
get_dispute_by_id200_response_dict = get_dispute_by_id200_response_instance.to_dict()
# create an instance of GetDisputeById200Response from a dict
get_dispute_by_id200_response_from_dict = GetDisputeById200Response.from_dict(get_dispute_by_id200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


