module.exports = {
  ModulePage: {
    modules_tab: '#subtab-AdminModulesManage',
    upload_button: '#page-header-desc-configuration-add_module ',
    zip_file_input: '#importDropzone input',
    installed_message: '#importDropzone div:nth-child(3) p:nth-child(1)',
    close_modal_button: '#module-modal-import-closing-cross ',
    search_input: 'div.pstaggerAddTagWrapper > input',
    search_button: '.btn.btn-primary.pull-right.search-button',
    page_loaded: '.module-search-result-title',
    modules_search_input: '.pstaggerAddTagInput',
    module_selection_input: 'input.pstaggerAddTagInput',
    modules_search_button: '#main-div button.search-button',
    configure_module_button: ' form[contains(action, "action configure %moduleTechName")] button[data-confirm_modal="module-modal-confirm-%moduleTechName-configure"]',
    configure_module_theme_button: '[data-tech-name="%moduleTechName"] a[href*="configure/%moduleTechName"]',
    success_install_message: '#importDropzone div:nth-child(3) i',
    action_dropdown: 'div[data-tech-name="%moduleTechName"] button.dropdown-toggle',
    uninstall_button: 'form[action*="action uninstall %moduleTechName button[data-confirm_modal="module-modal-confirm-%moduleTechName-uninstall"]',
    uninstall_confirmation: '#module-modal-confirm-prestafraud-uninstall a .module_action_modal_uninstall',
    built_in_module_span: '#built-in_modules ',
    installed_module_span: '#installed_modules ',
    theme_module_span: '#theme_modules ',
    selection_search_button: '#module-search-button',
    install_button: '#modules-list-container-all div[data-tech-name="%moduleTechName button',
    config_legend_adwords: '#content h4 .page-subtitle',
    uninstall_adwords_module: '#module-modal-confirm-gadwords-uninstall a .module_action_modal_uninstall',
    more_option_button: '#upgradeButtonBlock input',
    channel_select: '#advanced select',
    archive_select: '#for-useArchive select',
    save_button: '#advanced input .btn-primary',
    save_message: '#configResult ',
    version_number: '#for-useArchive input',
    upgrade_button: '#upgradeNow ',
    loader_tag: '#pleaseWait" and contains(style,"display: none;")',
    upgrade_block: '#upgradeButtonBlock ',
    refresh_button: '#upgradeButtonBlock a):nth-child(2)',
    module_import_success: '#importDropzone div:nth-child(3) p:nth-child(1)',
    config_legend: '#content  div > ul .breadcrumb .page-breadcrumb:nth-child(1) > li:nth-child(2):not(.breadcrumb-current)',
//#content  ul.breadcrumb.page-breadcrumb:nth-child(1) > li:nth-child(2)
    uninstall_module_modal: 'a [class*="module_action_modal_uninstall"]',
    disable_module: 'form[action*="action disable %moduleTechName button[data-confirm_modal="module-modal-confirm-%moduleTechName-disable"]',
    confirmation_disable_module: 'a [class*="module_action_modal_disable"]',
    module_autoUpgrade_menu: '#subtab-AdminSelfUpgrade a',
    rollback_selection: '#restoreBackupContainer select',
    rollback_version: '#restoreBackupContainer option:nth-child(2)',
    rollback_button: '#rollback ',
    success_msg: ' p .alert-success:nth-child(1) p',
    module_list: '#modules-list-container-all div[data-type="module" or data-type="service" ]):nth-child(%I)',
    sort_select: ' select.sort-component',
    maintenance_shop: '#currentConfiguration input[contains(name,"putUnderMaintenance")]',
    confirm_maintenance_shop_icon: '#currentConfiguration img:nth-child(5)',
    enable_module: 'form[action*="action enable %moduleTechName button[data-confirm_modal="module-modal-confirm-%moduleTechName-enable"]',
    reset_module: ' form[contains(action, "action reset %moduleTechName")] button[data-confirm_modal="module-modal-confirm-%moduleTechName-reset"]',
    reset_button_modal: '#module-modal-confirm-%moduleTechName-reset a .module_action_modal_reset',
    backdrop_modale: '#module-modal-confirm-statsnewsletter-uninstall',
    installed_module_div: 'div[data-tech-name=%moduleTechName]',
    module_action_href: 'div[data-tech-name="%moduleTechName div[class*="module-actions > a , div[data-tech-name="%moduleTechName form > button[data-confirm_modal="module-modal-confirm-%moduleTechName-enable"]',
    //List of modules after search
    list_module: '#modules-list-container-all div:nth-child(%I)',
    modules_number_span: '#selected_modules ',
    discover_button: '#modules-list-container-all div[data-tech-name="pm_advancedtopmenu a [contains(text(),"Discover")]',
    //List of modules in notifications tab
    configure_module: '#modules-list-container-notification button[data-confirm_modal="module-modal-confirm-%moduleTechName-configure"]',
    modules_number_to_configure: '#module-short-list-configure span:nth-child(1)',
    notification_number: '#subtab-AdminModulesNotifications span.notification-counter ',
    update_notification_number_span: '#subtab-AdminModulesUpdates span.notification-counter ',
    selection_tab: '#head_tabs a:nth-child(1)',
    discover_amazon_module_button: '#modules-list-container-all a [contains(href,"amazon-market-place")]',
    ModuleBankTransferPage: {
      account_owner_input: '#BANK_WIRE_OWNER ',
      account_details_textarea: '#BANK_WIRE_DETAILS ',
      bank_address_textarea: '#BANK_WIRE_ADDRESS ',
      save_button: '#module_form_submit_btn '
    },
    MainMenuPage: {
      available_item_list: '#availableItems option[value="CAT%ID"]',
      add_item_button: '#addItem ',
      selected_item_list: '#items option[value="CAT%ID"]',
      save_button: '#module_form_submit_btn '
    },
    ReadMoreModal: {
      read_more_link: '#modules-list-container-all div[contains(data-tech-name, "%moduleTechName")] a [text()="Read more"]',
      overview_content: '#overview-%moduleTechName p',
      additional_content: '#additional-%moduleTechName ',
      features_content: '#features-%moduleTechName ',
      changelog_content: '#changelog-%moduleTechName ',
      module_readmore_tabs: '#modules-list-container-all div[contains(data-tech-name, "%moduleTechName")] a [contains(text(), "%NAME")]',
      close_modal_button: '#module-modal-read-more-%moduleTechName button.close '
    },

    //Module name in "addons.prestashop.com" after clicking on "Dicover" button
    module_name: '#product_content div.product_head h1',
    ContactFormPage: {
      send_confirmation_email_button: '#fieldset_0 label[for="CONTACTFORM_SEND_CONFIRMATION_EMAIL_%S"]',
      receive_customers_messages_label: '#fieldset_0 label[for="CONTACTFORM_SEND_NOTIFICATION_EMAIL_%S"]',
      save_button: '#module_form_submit_btn '
    },
    see_more_link: '#main-div button[class*="see-more"]',
    configure_link: '#main-div div[data-tech-name="%moduleTechName"] a[href*="/action/configure"]',
    upgrade_module_button: '#modules-list-container-update button[contains(data-confirm_modal,"%moduleTechName-upgrade")]',
    module_bloc: '#modules-list-container-update div .module-item-list:nth-child(1)',
    check_configure: '#cab-getstarted h2',
    categories_list: '#categories"]) | (#catDropdown"])',
    categories_option_link: ' div.module-category-selector li[data-category-display-name="%CAT a',
    categories_option_number_span: ' div.module-category-selector li[data-category-display-name="%CAT span',
    categories_by_name_option: ' div.module-category-selector li[data-category-display-name="%CAT"]',
    category_list: '#main-div div[aria-labelledby*=categories] ul',
    categories_element_option: '#main-div div[contains(aria-labelledby,"categories")] li:nth-child(%ID)',
    categories_element_number_span: '#main-div div[contains(aria-labelledby,"categories")] li:nth-child(%ID) span',
    see_more_by_category_link: '#main-div button[data-category="%ID" and .see-more]',
    module_list_container_bloc: '#modules-list-container-%ID',
    module_list_container_empty_bloc: '#main-div div.module-list-empty [data-name="%ID"]',
    first_module_bloc: '#main-div div .module-short-list:nth-child(2) div div:nth-child(1)',
    module_action_link: 'div[data-tech-name="%moduleTechName div.module-actions a |  ( div[data-tech-name="%moduleTechName form button[data-confirm_modal="module-modal-confirm-%moduleTechName-disable"])',
    status_list: '#module-status-dropdown ',
    status_option_link: '#main-div ul.module-status-selector li[data-status-ref="%ID] a',
    price_module_span: '#modules-list-container-all div[data-type="module" or data-type="service"]):nth-child(%I) div.module-price span',
    category_price_module_span: '#modules-list-container-all div[data-type="module" and data-categories="%IND"]):nth-child(%I) div.module-price span',
    category_module_list: '#modules-list-container-all div[(data-type="module" or data-type="service") and data-categories="%IND"]):nth-child(%I)',
  }
};
