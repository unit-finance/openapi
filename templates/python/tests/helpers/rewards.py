"""Reward helpers, the Python analogue of Node's ``helpers/rewards.ts``."""

from typing import Any, Optional

from unit_finance_sdk.exceptions import ApiException

from .api import build_rewards_api, unwrap
from .capabilities import error_body, is_capability_error
from .fixtures import build_create_reward_request
from .shared_account import get_or_create_shared_account


def create_reward_or_skip() -> Optional[Any]:
    """Create a reward, or ``None`` when the org has no rewards program.

    Rewards are funded from an org-level reward account that is provisioned per
    bank agreement and cannot be created from the API, so an org without one
    answers the create with 4xx/5xx — feature-unavailable, not a bad request.
    """
    account_id = get_or_create_shared_account()["account_id"]
    try:
        res = build_rewards_api().create_reward_with_http_info(
            build_create_reward_request(account_id)
        )
    except ApiException as err:
        if is_capability_error(err):
            print(
                "Rewards are not provisioned on this sandbox org; skipping. "
                f"{error_body(err)}"
            )
            return None
        raise

    if res.status_code != 201:
        raise RuntimeError(
            f"Failed to create reward: expected status 201, got {res.status_code}."
        )
    return unwrap(res.data.data)


def get_reward_id() -> Optional[str]:
    """A reward id for the read suite. Prefers one this run created; falls back
    to an existing reward so the read is still covered on an org that cannot
    create. ``None`` when neither is available.
    """
    created = create_reward_or_skip()
    if created is not None:
        return created.id

    res = build_rewards_api().list_rewards_with_http_info(page_limit="1")
    for reward in res.data.data or []:
        reward_id = getattr(unwrap(reward), "id", None)
        if isinstance(reward_id, str):
            return reward_id
    return None
