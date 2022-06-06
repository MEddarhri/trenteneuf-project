import React, { useState } from 'react';
import NavDashboard from 'shared/dashnav';
import Calendar from 'shared/calendar';
import MonthGuardsOverview from 'shared/monthoverview';
import AddEditNotif from 'shared/notificationAddEdit';
import AddEditGuard from 'shared/addguard';
import { FiChevronDown } from 'react-icons/fi';
import { DatePicker, Select, TimePicker } from 'antd';
import { data } from 'fakeData';
import SelectDateIcon from 'shared/inputicon/SelectDateIcon';
import moment from 'moment';

import {
  AddEditGuardContainer,
  AddEditGuardInputCont,
  AddEditGuardLabel,
  AddEditGuardTitle,
  AddGuardContainer,
  AddGuardOverlay,
  BottomPart,
  ButtonAddEdit,
  CalendarArea,
  CalendarHeading,
  ConfirmAndCancelBtnCont,
  DashContainer,
  FilterButton,
  FilterSvg,
  GuardOverview,
  GuardsStatusContainer,
  GuardStatusDescription,
  GuardStatusTitle,
  MainCalendarContainer,
  Month,
  NextGuardsArea,
  NextGuardTitle,
  NextGuardTitleContainer,
  Option,
  SelectArrowDown,
  SelectContLeft,
  SelectDateContainer,
  SelectStatusContainer,
  SelectTimeContainer,
  SelectView,
  SelectViewContainer,
  SlideBtn,
  SlideMonthContainer,
  SplitTimePicker,
  TopPart,
  Wrapper,
} from './Styles';
import { useSelector } from 'react-redux';

const Index = () => {
  //get toggle value for add task
  const addTask = useSelector((state) => state.toggle.addTask);
  //time format timePicker
  const format = 'HH:mm';
  //start date of the calendar set to current date
  const [startDate, setStartDate] = useState(new Date());
  //days in french format
  const monthNamesFr = [
    'janvier',
    'février',
    'mars',
    'avril',
    'mai',
    'juin',
    'juillet',
    'août',
    'septembre',
    'octobre',
    'novembre',
    'décembre',
  ];
  const { Option } = Select;

  // handle change next month
  const handleChangeNextMonth = () => {
    // if the is the last month go to next year first month (janvier) else add a month
    if (startDate.getMonth() === 11) {
      setStartDate(new Date(startDate.getFullYear() + 1, 0, 1));
    } else {
      setStartDate(
        new Date(startDate.getFullYear(), startDate.getMonth() + 1, 1)
      );
    }
  };

  // handle change prev month
  const handleChangePrevMonth = () => {
    // if the is the first month of the year (janvier) go to last year's
    // last month (decembre) else substract a month
    if (startDate.getMonth() === 0) {
      setStartDate(new Date(startDate.getFullYear() - 1, 11, 1));
    } else {
      setStartDate(
        new Date(startDate.getFullYear(), startDate.getMonth() - 1, 1)
      );
    }
  };

  return (
    <Wrapper>
      {/* add guard overlay  */}
      {addTask && <AddEditGuard />}
      <DashContainer>
        <NavDashboard active='Mes gardes' />
        <MainCalendarContainer>
          <CalendarArea>
            <CalendarHeading>Gestion des jours de gardes</CalendarHeading>
            <SelectDateContainer>
              <GuardsStatusContainer>
                <GuardStatusTitle>2 gardes prévues</GuardStatusTitle>
                <GuardStatusDescription>
                  Sur la période sélectionnée
                </GuardStatusDescription>
              </GuardsStatusContainer>
              <SlideMonthContainer>
                <div onClick={handleChangePrevMonth}>
                  <SlideBtn>{`<`}</SlideBtn>
                </div>

                <Month>{monthNamesFr[startDate.getMonth()]}</Month>
                <div onClick={handleChangeNextMonth}>
                  <SlideBtn>{`>`}</SlideBtn>
                </div>
              </SlideMonthContainer>
              <Select
                defaultValue='Mois'
                title='Vue : Mois'
                style={{ width: 120, borderRadius: '5px' }}
              >
                <Option value='Mois'>Mois</Option>
                <Option value='lucy'>Année</Option>
              </Select>
            </SelectDateContainer>
            <Calendar dateValue={startDate} events={data} />
          </CalendarArea>
          <NextGuardsArea>
            <NextGuardTitleContainer>
              <NextGuardTitle>Prochaines gardes</NextGuardTitle>
              <FilterButton>
                <FilterSvg src='/images/Filter.svg' />
                Filtrer
              </FilterButton>
            </NextGuardTitleContainer>
            <GuardOverview>
              <MonthGuardsOverview />
              <MonthGuardsOverview />
              <MonthGuardsOverview />
            </GuardOverview>
          </NextGuardsArea>
        </MainCalendarContainer>
      </DashContainer>
    </Wrapper>
  );
};

export default Index;
