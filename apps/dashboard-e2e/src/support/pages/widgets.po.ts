export const state = {
  route: '/widgets',
  homeRoute: '/',
  newMockWidget: {
    id: 'E2E_WIDGET_ID',
    title: 'E2E Mock Widget',
    description: 'E2E Mock Description',
  },
  updatedMockWidget: {
    id: 'E2E_WIDGET_ID',
    title: 'E2E Mock Widget!!',
    description: 'E2E Mock Description Updated',
  }
};

export const getWidgetsList = () => cy.get('[data-cy=widgets-list]');

export const getWidgets = () => cy.get('[data-cy=widgets-list]>mat-list-item');

export const getWidgetItem = (widget) => cy.get(`[data-cy=widget-${widget.id}-item]`);

export const getWidgetTitle = (widget) => cy.get(`[data-cy=widget-${widget.id}-item-title]`);

export const getWidgetDeleteBtn = (widget) => cy.get(`[data-cy=delete-widget-${widget.id}-btn]`);

export const getWidgetDetailsTitle = () => cy.get('[data-cy=widget-details-title]');

export const selectWidget = (widget) => getWidgetItem(widget).click();

export const clearForm = () => cy.get('[data-cy=widget-form-cancel]').click();

export const completeNewWidgetForm = (widget) => {
  cy.get(`[data-cy=widget-form-title]`).type(widget.title, { delay: 20});
  cy.get(`[data-cy=widget-form-description]`).type(widget.description, { delay: 20});
  cy.get('[data-cy=widget-form-save]').click();
};

export const completeUpdateWidgetForm = (widget) => {
  cy.get(`[data-cy=widget-form-title]`).clear().type(`${widget.title}!!`, { delay: 20});
  cy.get(`[data-cy=widget-form-description]`).clear().type(`${widget.description} updated`, { delay: 20});
  cy.get('[data-cy=widget-form-save]').click();
};

export const createWidget = (model, widget) => {
  cy.createEntity(model, widget);
  completeNewWidgetForm(widget);
};

export const updateWidget = (model, widget) => {
  cy.updateEntity(model, widget);
  completeUpdateWidgetForm(widget);
};

export const deleteWidget = (model, widget) => {
  cy.deleteEntity(model, widget);
  getWidgetDeleteBtn(widget).click();
};

export const checkWidgetDetailsTitle = (title) => {
  getWidgetDetailsTitle().should('contain.text', title);
};

export const checkWidgetsLength = (widgets) => {
  getWidgets().should('have.length', widgets.length);
};

export const checkWidget = (widget, exists = true) => {
  const condition = exists ? 'exist' : 'not.exist';
  getWidgetItem(widget).should(condition);
};
