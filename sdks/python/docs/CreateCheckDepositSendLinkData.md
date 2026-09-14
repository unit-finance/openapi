# CreateCheckDepositSendLinkData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** |  | 
**attributes** | [**CreateCheckDepositSendLinkDataAttributes**](CreateCheckDepositSendLinkDataAttributes.md) |  | 
**relationships** | [**CreateCheckDepositSendLinkDataRelationships**](CreateCheckDepositSendLinkDataRelationships.md) |  | 

## Example

```python
from unit_finance_sdk.models.create_check_deposit_send_link_data import CreateCheckDepositSendLinkData

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCheckDepositSendLinkData from a JSON string
create_check_deposit_send_link_data_instance = CreateCheckDepositSendLinkData.from_json(json)
# print the JSON string representation of the object
print(CreateCheckDepositSendLinkData.to_json())

# convert the object into a dict
create_check_deposit_send_link_data_dict = create_check_deposit_send_link_data_instance.to_dict()
# create an instance of CreateCheckDepositSendLinkData from a dict
create_check_deposit_send_link_data_from_dict = CreateCheckDepositSendLinkData.from_dict(create_check_deposit_send_link_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


