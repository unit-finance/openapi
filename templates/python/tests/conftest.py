"""Pytest bootstrap for the Unit Python SDK integration suite.

Two responsibilities, run before any test module is imported:

  1. Load the nearest ``.env`` by walking up from this file's directory
     (the SDK root's ``.env`` sits one level up at ``sdks/python/.env``).
     Real environment variables always win — ``load_dotenv`` does not
     override already-set vars.
  2. Put the tests directory on ``sys.path`` so ``helpers`` imports as a
     package regardless of the working directory pytest is invoked from.

Mirrors Node's ``helpers/api.ts`` env handling and Java's ``ApiSupport``
upward ``.env`` search.
"""

import sys
from pathlib import Path


def _load_env() -> None:
    try:
        from dotenv import load_dotenv
    except ImportError:
        return
    here = Path(__file__).resolve().parent
    for directory in (here, *here.parents):
        candidate = directory / ".env"
        if candidate.is_file():
            load_dotenv(candidate)
            return


_load_env()
sys.path.insert(0, str(Path(__file__).resolve().parent))
