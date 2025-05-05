from pydantic import BaseModel, HttpUrl
from typing import Optional
from enum import Enum
from packages.backend.db_access.models.UserProfile import UserProfile

class SaveJob(BaseModel):
    job_id: str
    user: UserProfile


# Enums for limited options
class LoadEnum(str, Enum):
    FULLTIME = "fulltime"
    PARTTIME = "parttime"
    FREELANCE = "freelance"
    INTERNSHIP = "internship"


class ModeEnum(str, Enum):
    REMOTE = "remote"
    HYBRID = "hybrid"
    ONSITE = "onsite"


class SeniorityLevelEnum(str, Enum):
    JUNIOR = "junior"
    MID = "mid"
    SENIOR = "senior"
    LEAD = "lead"


class PeriodEnum(str, Enum):
    HOURLY = "hourly"
    MONTHLY = "monthly"
    YEARLY = "yearly"


# Nested models
class Qualifications(BaseModel):
    seniority_level: Optional[SeniorityLevelEnum] = None
    education: Optional[str] = None
    experience: Optional[str] = None
    skills: Optional[list[str]] = []


class SalaryRange(BaseModel):
    min: float
    max: float
    currency: str
    period: PeriodEnum


class Tags(BaseModel):
    keywords: list[str] = []
    frameworks: list[str] = []
    technologies: list[str] = []


class Job(BaseModel):
    id: str
    publish_date: str  # could be datetime
    expiration_date: str
    company_logo: HttpUrl
    title: str
    company: str
    location: str
    load: LoadEnum
    mode: ModeEnum
    description: str
    qualifications: Qualifications
    salary_range: SalaryRange
    tags: Tags