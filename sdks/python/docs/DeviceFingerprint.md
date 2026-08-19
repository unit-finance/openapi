# DeviceFingerprint

A device fingerprint used for fraud and risk prevention. See Device Fingerprints.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | The device fingerprint value produced by the provider&#39;s SDK. | 
**provider** | **str** | The device fingerprint provider (e.g. \&quot;iovation\&quot;). | 

## Example

```python
from unit_finance_sdk.models.device_fingerprint import DeviceFingerprint

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceFingerprint from a JSON string
device_fingerprint_instance = DeviceFingerprint.from_json(json)
# print the JSON string representation of the object
print(DeviceFingerprint.to_json())

# convert the object into a dict
device_fingerprint_dict = device_fingerprint_instance.to_dict()
# create an instance of DeviceFingerprint from a dict
device_fingerprint_from_dict = DeviceFingerprint.from_dict(device_fingerprint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


