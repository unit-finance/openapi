# CreateCheckDepositSendLinkDataAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**qr_code** | **bool** | If true, a QR code (base64 encoded PNG) will be included in the response. | 
**idempotency_key** | **str** | See Idempotency. | 

## Example

```python
from unit_finance_sdk.models.create_check_deposit_send_link_data_attributes import CreateCheckDepositSendLinkDataAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of CreateCheckDepositSendLinkDataAttributes from a JSON string
create_check_deposit_send_link_data_attributes_instance = CreateCheckDepositSendLinkDataAttributes.from_json(json)
# print the JSON string representation of the object
print(CreateCheckDepositSendLinkDataAttributes.to_json())

# convert the object into a dict
create_check_deposit_send_link_data_attributes_dict = create_check_deposit_send_link_data_attributes_instance.to_dict()
# create an instance of CreateCheckDepositSendLinkDataAttributes from a dict
create_check_deposit_send_link_data_attributes_from_dict = CreateCheckDepositSendLinkDataAttributes.from_dict(create_check_deposit_send_link_data_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


