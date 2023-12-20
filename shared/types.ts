import React from "react";

export type RedirectProps = {
  href: string;
};

export type jobItem = {
  item: any;
  selectedJob?: Boolean;
  handleCardPress?: () => void;
};

export type SearchQuery = {
  query?: string;
  page?: string | number;
  num_pages?: string | number;
  job_id?: string | number | string[];
};

export type NearbyJobType = {
  job: {
    employer_logo: string;
    job_title: string;
    job_employment_type: string;
  };
  handleNavigate?: () => void;
};

export type companyProps = {
  companyLogo: string;
  jobTitle: string;
  companyName: string;
  location: string;
};

export interface tabProps {
  tabs: string[];
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

export type tabButtonProps = {
  name: string;
  activeTab: string;
  onHandleSearchType: () => void;
};

export interface welcomeSearch {
  searchTerm: string;
  setSearchTerm: React.Dispatch<React.SetStateAction<string>>;
  handleClick: () => void;
}
