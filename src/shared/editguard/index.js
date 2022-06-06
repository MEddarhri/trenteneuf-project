import React, { useState } from 'react';
import locale from 'antd/es/date-picker/locale/fr_CA';
import AddEditNotif from 'shared/notificationAddEdit';
import { FiChevronDown } from 'react-icons/fi';
import { DatePicker, Select, TimePicker } from 'antd';
import 'moment/locale/fr';
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
  Option,
  SelectContLeft,
  SelectStatusContainer,
  SelectTimeContainer,
  SplitTimePicker,
  TopPart,
} from './Styles';

const Index = () => {
  const [guard, setGuard] = useState({
    date: '',
    startTime: '',
    endTime: '',
    status: '',
  });
  //select option
  const { Option } = Select;
  //time format
  const format = 'HH:mm';

  //handle change date
  const handleChangeDate = (date, dateString) => {
    setGuard({ ...guard, date: dateString });
  };
  //handle change Start time
  const handleChangeStartTime = (startTime, startTimeString) => {
    setGuard({ ...guard, startTime: startTimeString });
  };
  //handle change Start time
  const handleChangeEndTime = (endTime, endTimeString) => {
    setGuard({ ...guard, endTime: endTimeString });
  };
  //handle change select status
  const handleChangeSelectStatus = (status) => {
    setGuard({ ...guard, status });
  };

  return (
    <AddGuardOverlay>
      <AddEditGuardContainer>
        <TopPart>
          <AddEditGuardTitle>Ajouter une garde</AddEditGuardTitle>
          <AddEditGuardInputCont>
            <AddEditGuardLabel>Date</AddEditGuardLabel>
            <DatePicker
              locale={locale}
              placeholder='Sélectioner une date'
              format='dddd, DD MMM YYYY'
              suffixIcon={<SelectDateIcon />}
              onChange={handleChangeDate}
            />
            <SelectTimeContainer>
              <TimePicker
                defaultValue={moment('12:08', format)}
                format={format}
                suffixIcon={<FiChevronDown />}
                onChange={handleChangeStartTime}
              />
              <SplitTimePicker>à</SplitTimePicker>
              <TimePicker
                defaultValue={moment('12:08', format)}
                format={format}
                suffixIcon={<FiChevronDown />}
                onChange={handleChangeEndTime}
              />
            </SelectTimeContainer>
            <SelectStatusContainer>
              <SelectContLeft>Status</SelectContLeft>
              <Select
                defaultValue='En attente'
                title='Select status'
                onChange={handleChangeSelectStatus}
              >
                <Option value='En attente'>En attente</Option>
                <Option value='Confirmée'>Confirmée</Option>
              </Select>
            </SelectStatusContainer>
            <AddEditNotif />
          </AddEditGuardInputCont>
        </TopPart>

        <BottomPart>
          <ButtonAddEdit regular={true}>Annuler</ButtonAddEdit>
          <ButtonAddEdit>Confirmer</ButtonAddEdit>
        </BottomPart>
      </AddEditGuardContainer>
    </AddGuardOverlay>
  );
};

export default Index;
